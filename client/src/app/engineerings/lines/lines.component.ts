import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {faExternalLinkAlt, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {DataTableSettings, DataTableColumnDefinition, DataTableToolbarControl} from 'data-table';
import {DynamicFormService, ModalConfig, CustomValidators} from 'dynamic-form';
import {LineService} from '../shared/line.service';
import {Line} from '../shared/models/line.model';

@Component({
  selector: 'flcos-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit, OnDestroy {

  settings: DataTableSettings;
  // Indicator whether current user is admin
  isAdmin = true;
  closeResult = '';
  columnDefinitions: DataTableColumnDefinition[];
  // Used for cleaning subscription
  private unsubscribe: Subject<void> = new Subject();

  constructor(private lineService: LineService,
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
        click: this.viewLine.bind(this)
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
    this.lineService.allLines$.pipe(takeUntil(this.unsubscribe)).subscribe(lines => {
      this.settings = {
        selectableRows: false,
        columnDefinitions: this.columnDefinitions,
        data: lines.map(l => ({
          ...l,
          view: faExternalLinkAlt,
          viewChildren: faExternalLinkAlt,
          delete: faTrash
        })),
        toolBar: {
          right: [
            ...this.isAdmin ? [{
              name: 'New Line',
              type: 'button',
              icon: faPlus,
              callback: this.createLine.bind(this)
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

  createLine() {
    const config: ModalConfig = {
      headerText: 'Create a line',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: { name: string }) => this.doCreateLine(e),
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

  doCreateLine(newLine: { name: string }): void {
    newLine = {...newLine};
    this.lineService.create(newLine).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  viewLine(line: Line) {
    const config: ModalConfig = {
      headerText: 'View a line',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: { name: string }) => this.doUpdateLine(line, e),
      onDismiss: (e: string) => {
      },
      extraButtons: [],
      fields: [
        {
          type: 'input',
          label: 'Name',
          name: 'name',
          value: line.name,
          placeholder: 'Enter the line name',
          validation: [
            CustomValidators.required('Name required'),
          ]
        }
      ]
    };
    this.dynamicFormService.popDynamicFormModal(config);
  }

  doUpdateLine(line: Line, e: { name: string }): void {
    line.name = e.name;
    this.lineService.update(line.id, line).pipe(takeUntil(this.unsubscribe)).subscribe();
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
    this.lineService.delete(li.id).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
    });
  }

}
