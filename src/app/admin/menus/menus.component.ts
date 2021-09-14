import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subject} from 'rxjs';
import {DataTableColumnDefinition, DataTableSettings, DataTableToolbarControl} from 'data-table';
import {takeUntil} from 'rxjs/operators';
import {faExternalLinkAlt, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {MenuService} from '../../core/layout/menu/menu.service';

@Component({
  selector: 'emes-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit, OnDestroy {
  settings: DataTableSettings;
  // Indicator whether current user is admin
  isAdmin = true;
  // Used for cleaning subscription
  private unsubscribe: Subject<void> = new Subject();
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    const columnDefinition: DataTableColumnDefinition[] = [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '2', name: 'name', label: 'Name', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '2', name: 'url', label: 'Url', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {
        id: '3',
        name: 'view',
        label: 'View',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.viewUser.bind(this)
      },
      {
        id: '4',
        name: 'delete',
        label: 'Delete',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.deleteUser.bind(this)
      },
    ];
    this.menuService.menus$.pipe(takeUntil(this.unsubscribe)).subscribe(users => {
      this.settings = {
        selectableRows: false,
        columnDefinitions: columnDefinition,
        data: users.map(t => ({...t, view: faExternalLinkAlt, delete: faTrash})),
        toolBar: {
          right: [
            ...this.isAdmin ? [{
              name: 'New Menu',
              type: 'button',
              icon: faPlus,
              callback: this.createUser.bind(this)
            } as DataTableToolbarControl] : [],
            {type: 'filter'} as DataTableToolbarControl
          ]
        },
        groupBy: []
      };
    });
  }

  ngOnDestroy(): void {
  }

  createUser() {

  }

  viewUser() {

  }

  deleteUser() {

  }



}
