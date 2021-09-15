import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {DataTableColumnDefinition, DataTableSettings, DataTableToolbarControl} from 'data-table';
import {takeUntil} from 'rxjs/operators';
import {faExternalLinkAlt, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {RoleService} from '../../core/user/role.service';

import {Role} from '../../core/user/models/role.model';
import {DynamicFormService} from '../../dynamic-form/services/dynamic-form.service';
import {ModalConfig} from '../../dynamic-form/models/modal-config.interface';
import {CustomValidators} from '../../dynamic-form/validators/custom-validators';

@Component({
  selector: 'emes-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit, OnDestroy {
  settings: DataTableSettings;
  // Indicator whether current user is admin
  isAdmin = true;
  // Used for cleaning subscription
  private unsubscribe: Subject<void> = new Subject();

  constructor(private roleService: RoleService, private dynamicFormService: DynamicFormService) {
  }

  ngOnInit(): void {
    const columnDefinition: DataTableColumnDefinition[] = [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: true, filterMode: 'none'},
      {id: '2', name: 'name', label: 'Name', type: 'text', visible: true, searchable: true, filterMode: 'text'},
      {
        id: '4',
        name: 'view',
        label: 'View',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.viewRole.bind(this)
      },
      {
        id: '5',
        name: 'delete',
        label: 'Delete',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.deleteRole.bind(this)
      },
    ];
    this.roleService.roles$.pipe(takeUntil(this.unsubscribe)).subscribe(users => {
      this.settings = {
        selectableRows: false,
        columnDefinitions: columnDefinition,
        data: users.map(t => ({...t, view: faExternalLinkAlt, delete: faTrash})),
        toolBar: {
          right: [
            ...this.isAdmin ? [{
              name: 'New Role',
              type: 'button',
              icon: faPlus,
              callback: this.createRole.bind(this)
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

  createRole() {
    const config: ModalConfig = {
      headerText: 'Create a role',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: { name: string }) => this.doCreateRole(e.name),
      onDismiss: (e: string) => {
      },
      extraButtons: [],
      fields: [
        {
          type: 'input',
          label: 'Name',
          name: 'name',
          placeholder: 'Enter a role name',
          validation: [
            CustomValidators.required('Role name required'),
          ]
        }
      ]
    };
    this.dynamicFormService.popDynamicFormModal(config);
  }

  private doCreateRole(name: string): void {
    this.roleService.create(name).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  viewRole(role: Role) {
    const config: ModalConfig = {
      headerText: 'Create a role',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: { name: string }) => this.doRename(role.id, e.name),
      onDismiss: (e: string) => {
      },
      extraButtons: [],
      fields: [
        {
          type: 'input',
          label: 'Name',
          name: 'name',
          value: role.name,
          placeholder: 'Enter a role name',
          validation: [
            CustomValidators.required('Role name required'),
          ]
        }
      ]
    };
    this.dynamicFormService.popDynamicFormModal(config);
  }

  private doRename(id: string, newName: string) {
    this.roleService.rename(id, newName).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  deleteRole() {

  }

}
