import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import {LineService} from '../shared/line.service';
import {faExternalLinkAlt, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {DataTableSettings, DataTableColumnDefinition, DataTableToolbarControl} from 'data-table';
import {DynamicFormService, ModalConfig, CustomValidators} from 'dynamic-form';
import {Line} from '../shared/models/line.model';
import {Section} from '../shared/models/section.model';
import {SectionService} from '../shared/section.service';

@Component({
  selector: 'flcos-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit, OnDestroy {

  sections: Section[];

  settings: DataTableSettings;
  // Indicator whether current user is admin
  isAdmin = true;
  closeResult = '';
  columnDefinitions: DataTableColumnDefinition[];
  // Used for cleaning subscription
  private unsubscribe: Subject<void> = new Subject();

  constructor(private sectionService: SectionService,
              private lineService: LineService,
              private dynamicFormService: DynamicFormService) {
  }

  ngOnInit(): void {
    this.columnDefinitions = [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '2', name: 'name', label: 'Name', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '3', name: 'status', label: 'Status', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '4', name: 'isProduction', label: 'Is Production', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {
        id: '5',
        name: 'view',
        label: 'View',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.viewSection.bind(this)
      },
      {
        id: '6',
        name: 'delete',
        label: 'Delete',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.deleteLine.bind(this)
      },
    ];
    this.sectionService.allSections$.pipe(takeUntil(this.unsubscribe)).subscribe(sections => {
      this.settings = {
        selectableRows: false,
        columnDefinitions: this.columnDefinitions,
        data: sections.map(l => ({
          ...l,
          view: faExternalLinkAlt,
          viewChildren: faExternalLinkAlt,
          delete: faTrash
        })),
        toolBar: {
          right: [
            ...this.isAdmin ? [{
              name: 'New Section',
              type: 'button',
              icon: faPlus,
              callback: this.createSection.bind(this)
            } as DataTableToolbarControl] : [],
            {type: 'filter'} as DataTableToolbarControl
          ]
        },
        groupBy: []
      };
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  createSection() {
    const config: ModalConfig = {
      headerText: 'Create a line',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: { index: number, name: string, line: { id: string, name: string }  }) => this.doCreateSection(e),
      onDismiss: (e: string) => {
      },
      extraButtons: [],
      fields: [
        {
          type: 'input',
          label: 'Name',
          name: 'name',
          placeholder: 'Enter the menu name',
          validation: [
            CustomValidators.required('Name required'),
          ]
        }
      ]
    };
    this.dynamicFormService.popDynamicFormModal(config);
  }

  doCreateSection(newSection: { index: number, name: string, line: { id: string, name: string }  }): void {
    newSection = {...newSection};
    this.sectionService.create(newSection).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  viewSection(section: Section) {
    const config: ModalConfig = {
      headerText: 'View a line',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: { name: string }) => this.doUpdateSection(section, e),
      onDismiss: (e: string) => {
      },
      extraButtons: [],
      fields: [
        {
          type: 'input',
          label: 'Name',
          name: 'name',
          value: section.name,
          placeholder: 'Enter the line name',
          validation: [
            CustomValidators.required('Name required'),
          ]
        }
      ]
    };
    this.dynamicFormService.popDynamicFormModal(config);
  }

  doUpdateSection(section: Section, e: { name: string }): void {
    section.name = e.name;
    this.sectionService.update(section.id, section).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  deleteLine(line: Line) {
    const config = {
      headerText: 'Confirm Delete Line.',
      submitText: 'Ok',
      closeText: 'Cancel',
      onSubmit: () => this.doDelete(line),
      onDismiss: () => {
      },
      notifications: [`Are you Sure you want to delete line '${line.name}'?`]
    };
    this.dynamicFormService.popNotification(config);
  }

  doDelete(li: Line) {
    this.sectionService.delete(li.id).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
    });
  }
}
