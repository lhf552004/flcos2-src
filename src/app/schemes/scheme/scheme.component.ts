import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import { DataTableSettings, DataTableColumnDefinition, DataTableToolbarControl } from 'data-table';
import {takeUntil} from 'rxjs/operators';
import {faExternalLinkAlt, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {SchemeService} from '../../shared/services/scheme.service';

@Component({
  selector: 'emes-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.scss']
})
export class SchemeComponent implements OnInit, OnDestroy {
  settings: DataTableSettings;
  // Indicator whether current user is admin
  isAdmin = true;
  // Used for cleaning subscription
  private unsubscribe: Subject<void> = new Subject();
  constructor(private schemeService: SchemeService) { }

  ngOnInit(): void {
    const columnDefinition: DataTableColumnDefinition[] = [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '2', name: 'fullName', label: 'Field Name', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '3', name: 'scheme', label: 'Type', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {
        id: '4',
        name: 'view',
        label: 'View',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.viewField.bind(this)
      },
      {
        id: '5',
        name: 'delete',
        label: 'Delete',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.deleteField.bind(this)
      },
    ];
    this.schemeService.scheme$.pipe(takeUntil(this.unsubscribe)).subscribe(scheme => {
      this.settings = {
        selectableRows: false,
        columnDefinitions: columnDefinition,
        data: scheme.fields.map(t => ({...t, view: faExternalLinkAlt, delete: faTrash})),
        toolBar: {
          right: [
            ...this.isAdmin ? [{
              name: 'New Field',
              type: 'button',
              icon: faPlus,
              callback: this.createField.bind(this)
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

  createField() {

  }

  viewField() {

  }

  deleteField() {}

}
