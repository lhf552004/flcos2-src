import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {faExternalLinkAlt, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {DataTableColumnDefinition, DataTableSettings, DataTableToolbarControl} from 'data-table';
import {DynamicFormService, ModalConfig, CustomValidators} from 'dynamic-form';
import {MenuService} from '../../core/layout/menu/menu.service';
import {RoleService} from '../../core/user/role.service';
import {MenuItem} from '../../core/layout/menu/menu-item';
import {Role} from '../../core/user/models/role.model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserViewerComponent} from '../user-viewer/user-viewer.component';

@Component({
  selector: 'emes-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit, OnDestroy {
  settings: DataTableSettings;
  // Indicator whether current user is admin
  isAdmin = true;
  closeResult = '';
  // Used for cleaning subscription
  private unsubscribe: Subject<void> = new Subject();

  constructor(private roleService: RoleService,
              private menuService: MenuService,
              private dynamicFormService: DynamicFormService) {
  }

  ngOnInit(): void {
    const columnDefinition: DataTableColumnDefinition[] = [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '2', name: 'name', label: 'Name', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '3', name: 'url', label: 'Url', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '4', name: 'roleName', label: 'Role', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {
        id: '4',
        name: 'view',
        label: 'View',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.viewMenu.bind(this)
      },
      {
        id: '5',
        name: 'delete',
        label: 'Delete',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.deleteMenu.bind(this)
      },
    ];
    this.menuService.allMenus$.pipe(takeUntil(this.unsubscribe)).subscribe(users => {
      this.settings = {
        selectableRows: false,
        columnDefinitions: columnDefinition,
        data: users.map(t => ({...t, roleName: t.role?.name, view: faExternalLinkAlt, delete: faTrash})),
        toolBar: {
          right: [
            ...this.isAdmin ? [{
              name: 'New Menu',
              type: 'button',
              icon: faPlus,
              callback: this.createMenu.bind(this)
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

  createMenu() {
    const config: ModalConfig = {
      headerText: 'Create a menu',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: { name: string, url: string, role: Role }) => this.doCreateMenu(e),
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
        }, {
          type: 'input',
          label: 'Url',
          name: 'url',
          placeholder: 'Enter the url',
          validation: [
            CustomValidators.required('Url required'),
          ]
        }, {
          type: 'select',
          label: 'Role',
          name: 'role',
          options: this.roleService.roles$.getValue().map(x => ({key: x, value: x.name})),
          placeholder: 'Choose existed Sprint Scenario',
          validation: []
        }
      ]
    };
    this.dynamicFormService.popDynamicFormModal(config);
  }

  doCreateMenu(newMenu: { name: string, url: string, role: Role }): void {
    this.menuService.createMenu(newMenu).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  viewMenu(menu: MenuItem) {
    const config: ModalConfig = {
      headerText: 'View a menu',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: { name: string, url: string, role: Role }) => this.doUpdateMenu(menu.id, e),
      onDismiss: (e: string) => {
      },
      extraButtons: [],
      fields: [
        {
          type: 'input',
          label: 'Name',
          name: 'name',
          value: menu.name,
          placeholder: 'Enter the menu name',
          validation: [
            CustomValidators.required('Name required'),
          ]
        }, {
          type: 'input',
          label: 'Url',
          name: 'url',
          value: menu.url,
          placeholder: 'Enter the url',
          validation: [
            CustomValidators.required('Url required'),
          ]
        }, {
          type: 'select',
          label: 'Role',
          name: 'role',
          value: menu.role?.name,
          options: this.roleService.roles$.getValue().map(x => ({key: x, value: x.name})),
          placeholder: 'Choose a role',
          validation: []
        }
      ]
    };
    this.dynamicFormService.popDynamicFormModal(config);
  }

  doUpdateMenu(id: string, menu: { name: string, url: string, role: Role }): void {
    this.menuService.update(id, menu).pipe(takeUntil(this.unsubscribe)).subscribe();
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
