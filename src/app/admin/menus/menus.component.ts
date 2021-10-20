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
import {NewMenuItem} from '../../core/layout/menu/new-menu-item';
import {ItemsSelectorComponent} from '../../shared/items-selector/items-selector.component';

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
  columnDefinitions: DataTableColumnDefinition[];
  // Used for cleaning subscription
  private unsubscribe: Subject<void> = new Subject();

  constructor(private roleService: RoleService,
              private menuService: MenuService,
              private dynamicFormService: DynamicFormService) {
  }

  ngOnInit(): void {
    this.columnDefinitions = [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '2', name: 'name', label: 'Name', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '3', name: 'url', label: 'Url', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '4', name: 'external', label: 'Is External', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '5', name: 'roleName', label: 'Role', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {
        id: '6',
        name: 'view',
        label: 'View',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.viewMenu.bind(this)
      },
      {
        id: '7',
        name: 'viewChildren',
        label: 'View children',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.viewChildren.bind(this)
      },
      {
        id: '8',
        name: 'delete',
        label: 'Delete',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.deleteMenu.bind(this)
      },
    ];
    this.menuService.allMenus$.pipe(takeUntil(this.unsubscribe)).subscribe(menus => {
      this.settings = {
        selectableRows: false,
        columnDefinitions: this.columnDefinitions,
        data: menus.map(m => ({
          ...m,
          external: m.external ? m.external : false,
          roleName: m.role?.name,
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

  createMenu(parentMenu: MenuItem) {
    const config: ModalConfig = {
      headerText: 'Create a menu',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: NewMenuItem) => parentMenu === null ? this.doCreateMenu(e) : this.doAddChildMenu(parentMenu, e),
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
          type: 'number',
          label: 'Index',
          name: 'index',
          placeholder: 'Enter the index of the menu',
          validation: [
            CustomValidators.required('Index required'),
          ]
        }, {
          type: 'checkbox',
          label: 'Is External',
          name: 'external',
          placeholder: '',
          validation: []
        }, {
          type: 'input',
          label: 'External Url',
          name: 'externalUrl',
          placeholder: 'Enter the external url',
          validation: []
        }, {
          type: 'input',
          label: 'Icon Name',
          name: 'iconName',
          placeholder: 'Enter the icon name',
          validation: []
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

  doCreateMenu(newMenu: NewMenuItem): void {
    newMenu = {...newMenu, isRoot: true};
    this.menuService.createMenu(newMenu).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  doAddChildMenu(parentMenu: MenuItem, newMenu: NewMenuItem) {
    parentMenu.children.push({...newMenu, id: '', isRoot: false, children: []});
    parentMenu = {...parentMenu};
    console.log(parentMenu);
    const updated = {
      id: parentMenu.id,
      name: parentMenu.name,
      url: parentMenu.url,
      index: parentMenu.index,
      iconName: parentMenu.iconName,
      children: parentMenu.children,
      role: parentMenu.role,
      external: parentMenu.external,
      externalUrl: parentMenu.externalUrl,
      isRoot: parentMenu.isRoot
    };
    console.log(updated);
    this.menuService.update(parentMenu.id, updated).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  viewMenu(menu: MenuItem) {
    const config: ModalConfig = {
      headerText: 'View a menu',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: MenuItem) => this.doUpdateMenu(menu, e),
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
          type: 'number',
          label: 'Index',
          name: 'index',
          placeholder: 'Enter the index of the menu',
          value: menu.index,
          validation: [
            CustomValidators.required('Index required'),
          ]
        }, {
          type: 'checkbox',
          label: 'Is External',
          name: 'external',
          value: menu.external,
          placeholder: '',
          validation: []
        }, {
          type: 'input',
          label: 'External Url',
          name: 'externalUrl',
          value: menu.externalUrl,
          placeholder: 'Enter the external url',
          validation: []
        }, {
          type: 'input',
          label: 'Icon Name',
          name: 'iconName',
          value: menu.iconName,
          placeholder: 'Enter the icon name',
          validation: []
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

  viewChildren(menu: MenuItem) {
    const right = [
      ...this.isAdmin ? [{
        name: 'New Menu',
        type: 'button',
        icon: faPlus,
        callback: this.createMenu.bind(this, menu)
      } as DataTableToolbarControl] : [],
      {type: 'filter'} as DataTableToolbarControl
    ];
    const config = {
      items: (menu.children ? menu.children : []).map(m => ({
        ...m,
        external: m.external ? m.external : false,
        roleName: m.role?.name,
        view: faExternalLinkAlt,
        viewChildren: faExternalLinkAlt,
        delete: faTrash
      })),
      columnDefinitions: this.columnDefinitions,
      right,
      onSubmit: (changes: any) => {
      },
      onDismiss: (e: string) => {
      }
    };

    this.dynamicFormService.popModal(ItemsSelectorComponent, config);
  }

  doUpdateMenu(menu: MenuItem, e: MenuItem): void {
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
