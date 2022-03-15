import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {RoleService} from '../../core/user/role.service';
import {MenuService} from '../../core/layout/menu/menu.service';
import {takeUntil} from 'rxjs/operators';
import {faExternalLinkAlt, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {MenuItem} from '../../core/layout/menu/menu-item';
import {NewMenuItem} from '../../core/layout/menu/new-menu-item';
import {MenuChildrenViewerComponent} from '../../admin/menu-children-viewer/menu-children-viewer.component';
import { DataTableSettings, DataTableColumnDefinition, DataTableToolbarControl } from 'data-table';
import { DynamicFormService, ModalConfig, CustomValidators } from 'dynamic-form';
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
        click: this.deleteMenu.bind(this)
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
              name: 'New Menu',
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

  createLine(parentMenu: MenuItem) {
    const config: ModalConfig = {
      headerText: 'Create a line',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: {name: string}) => this.doCreateLine(e),
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

  doCreateLine(newLine: {name: string}): void {
    newLine = {...newLine};
    this.lineService.create(newLine).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  viewLine(line: Line) {
    const config: ModalConfig = {
      headerText: 'View a line',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: {name: string}) => this.doUpdateLine(line, e),
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

  viewChildren(menu: MenuItem) {
    const config = {
      menu,
      onSubmit: (changes: any) => {
      },
      onDismiss: (e: string) => {
      }
    };

    this.dynamicFormService.popModal(MenuChildrenViewerComponent, config);
  }

  doUpdateLine(line: Line, e: {name: string}): void {
    const updated = {id: menu.id, children: menu.children, ...e};
    if (e.role) {
      updated.role = e.role;
    }
    this.menuService.update(menu.id, updated).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  deleteMenu(menu: MenuItem) {
    const config = {
      headerText: 'Confirm Delete Menu.',
      submitText: 'Ok',
      closeText: 'Cancel',
      onSubmit: () => this.doDelete(menu),
      onDismiss: () => {
      },
      notifications: [`Are you Sure you want to delete menu '${menu.name}'?`]
    };
    this.dynamicFormService.popNotification(config);
  }

  doDelete(menu: MenuItem) {
    this.menuService.delete(menu.id).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
    });
  }

}
