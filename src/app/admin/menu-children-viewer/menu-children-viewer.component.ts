import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {User} from '../../core/user/models/user.model';
import {Role} from '../../core/user/models/role.model';
import {Subject} from 'rxjs';
import {UserService} from '../../core/user/user.service';
import {RoleService} from '../../core/user/role.service';
import {faExternalLinkAlt, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {takeUntil} from 'rxjs/operators';
import {RolesSelectorComponent} from '../roles-selector/roles-selector.component';
import {MenuItem} from '../../core/layout/menu/menu-item';
import { DataTableSettings, DataTableColumnDefinition, DataTableToolbarControl } from 'data-table';
import { DynamicFormService, ModalConfig, CustomValidators } from 'dynamic-form';
import {NewMenuItem} from '../../core/layout/menu/new-menu-item';
import {MenuService} from '../../core/layout/menu/menu.service';

@Component({
  selector: 'flcos-menu-children-viewer',
  templateUrl: './menu-children-viewer.component.html',
  styleUrls: ['./menu-children-viewer.component.scss']
})
export class MenuChildrenViewerComponent implements OnInit, OnChanges, OnDestroy {

  @Input() config: {
    menu: MenuItem
  };

  isAdmin = true;

  name: string;

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  dismissed: EventEmitter<any> = new EventEmitter<any>();

  // The datatable settings
  settings: DataTableSettings;

  columnDefinitions: DataTableColumnDefinition[];

  // Used for cleaning subscription
  private unsubscribe: Subject<void> = new Subject();

  constructor(private dynamicFormService: DynamicFormService, private menuService: MenuService, private roleService: RoleService) {
  }

  ngOnInit(): void {
    this.columnDefinitions = [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '2', name: 'name', label: 'Name', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '3', name: 'url', label: 'Url', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '4', name: 'index', label: 'Index', type: 'text', visible: true, searchable: false, filterMode: 'text'},
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
        click: this.viewChildMenu.bind(this)
      },
      {
        id: '7',
        name: 'viewChildren',
        label: 'View children',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.viewChildChildren.bind(this)
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
    this.buildTableSettings();
  }

  ngOnChanges(): void {
    this.buildTableSettings();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  buildTableSettings(): void {
    this.name = this.config.menu.name;

    this.settings = {
      selectableRows: true,
      columnDefinitions: this.columnDefinitions,
      data: this.config.menu.children.map(m => ({
        ...m,
        external: m.external ? m.external : false,
        roleName: m.role?.name,
        view: faExternalLinkAlt,
        viewChildren: faExternalLinkAlt,
        delete: faTrash
      })),
      toolBar: {
        left: [
          {name: 'Remove', type: 'button', callback: this.removeChildren.bind(this)} as DataTableToolbarControl
        ],
        right: [
          ...this.isAdmin ? [{
            name: 'New Menu',
            type: 'button',
            icon: faPlus,
            callback: this.createChildMenu.bind(this, this.config.menu)
          } as DataTableToolbarControl] : [],
          {type: 'filter'} as DataTableToolbarControl
        ]
      },
      groupBy: []
    };
  }

  submitForm(method: string) {
    this.submitted.emit({

    });
  }

  dismissForm(method: string) {
    this.dismissed.emit(method);
  }

  createChildMenu(parentMenu: MenuItem) {
    const config: ModalConfig = {
      headerText: 'Create a menu',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: NewMenuItem) => this.doAddChildMenu(parentMenu, e),
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

  doAddChildMenu(parentMenu: MenuItem, newMenu: NewMenuItem) {
    parentMenu.children.push({...newMenu, id: '', isRoot: false, children: []});
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
    this.menuService.update(parentMenu.id, updated).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.buildTableSettings();
    });
  }

  viewChildMenu(menu: MenuItem) {
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

  viewChildChildren(menu: MenuItem) {
    const config = {
      menu,
      onSubmit: (changes: any) => {
      },
      onDismiss: (e: string) => {
      }
    };
    this.dynamicFormService.popModal(MenuChildrenViewerComponent, config);
  }

  doUpdateMenu(menu: MenuItem, e: MenuItem): void {
    const updated = {id: menu.id, children: menu.children, ...e};
    if (e.role) {
      updated.role = e.role;
    }
    this.menuService.update(menu.id, updated).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      const idx = this.config.menu.children.findIndex(m => m.id === menu.id);
      if (idx > -1) {
        this.config.menu.children.splice(idx, 1, updated);
      }
      this.buildTableSettings();
    });
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
      const idx = this.config.menu.children.findIndex(m => m.id === menu.id);
      if (idx > -1) {
        this.config.menu.children.splice(idx, 1);
        this.buildTableSettings();
      }
    });
  }

  removeChildren() {

  }
}
