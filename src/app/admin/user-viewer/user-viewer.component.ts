import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {DynamicFormService, ModalConfig} from 'dynamic-form';
import {DataTableSettings, DataTableColumnDefinition, DataTableToolbarControl} from 'data-table';
import {User} from '../../core/user/models/user.model';
import {Role} from '../../core/user/models/role.model';
import {faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {takeUntil} from 'rxjs/operators';
import {UserService} from '../../core/user/user.service';
import {RolesSelectorComponent} from '../roles-selector/roles-selector.component';
import {RoleService} from '../../core/user/role.service';

@Component({
  selector: 'emes-user-viewer',
  templateUrl: './user-viewer.component.html',
  styleUrls: ['./user-viewer.component.scss']
})
export class UserViewerComponent implements OnInit, OnChanges, OnDestroy {

  @Input() config: {
    user: User
  };

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  dismissed: EventEmitter<any> = new EventEmitter<any>();

  // The datatable settings
  settings: DataTableSettings;

  // The list of group members, name and description of the group.
  // A deep copy of the config.group object is needed in case user decide to cancel the form
  roles: Role[] = [];
  name: string;
  description: string | undefined;

  // The list of team members that have been added and removed
  // It is necessary to keep track of those to allow the user to cancel the form
  addedRoles: Role[] = [];
  removedRoles: Role[] = [];

  // Used for cleaning subscription
  private unsubscribe: Subject<void> = new Subject();

  constructor(private dynamicFormService: DynamicFormService, private userService: UserService, private roleService: RoleService) {
  }

  ngOnInit(): void {
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
    this.name = this.config.user.firstName + ' ' + this.config.user.lastName;
    this.roles = this.config.user.roles;
    const columnDefinition: DataTableColumnDefinition[] = [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: true, filterMode: 'none'},
      {id: '2', name: 'name', label: 'Role name', type: 'text', visible: true, searchable: true, filterMode: 'select'},
      {
        id: '3',
        name: 'icon',
        label: 'Remove',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.removeRole.bind(this)
      },
    ];

    this.settings = {
      selectableRows: true,
      columnDefinitions: columnDefinition,
      data: this.roles.map(g => ({...g, icon: faTrash})),
      toolBar: {
        left: [
          {name: 'Remove', type: 'button', callback: this.removeRoles.bind(this)} as DataTableToolbarControl
        ],
        right: [
          {name: 'Add Role', type: 'button', icon: faPlus, callback: this.addRole.bind(this)},
          {type: 'search'} as DataTableToolbarControl
        ]
      },
      groupBy: []
    };
  }

  submitForm(method: string) {
    this.submitted.emit({
      addedRoles: this.addedRoles,
      removedRoles: this.removedRoles
    });
  }

  dismissForm(method: string) {
    this.dismissed.emit(method);
  }

  // Add a role to the user
  addRole(): void {
    this.roleService.getRoles().pipe(takeUntil(this.unsubscribe)).subscribe(roles => {
      const selectedRoleIds = this.roles.map(r => r.id);
      const config = {
        roles: roles.filter(r => !selectedRoleIds.includes(r.id)),
        onSubmit: (selectedRoles: Role[]) => this.doAddRole(selectedRoles),
        onDismiss: (e: string) => {
        }
      };
      this.dynamicFormService.popModal(RolesSelectorComponent, config);
    });
  }

  doAddRole(roles: Role[]): void {
    this.config.user.roles.push(...roles);
    this.userService.updateUser(this.config.user.id, this.config.user, false).pipe(takeUntil(this.unsubscribe)).subscribe(x => {

        this.buildTableSettings();
      },
      error => {
        const indexs = roles.map(r => this.removedRoles.findIndex(x => x.id === r.id));
        indexs.forEach(idx => {
          if (idx > 0) {
            this.roles.splice(idx, 1);
          }
        });
      });
  }

  // Remove role from the user
  removeRole(row: any): void {
    this.removeRoles([{data: row}]);
  }

  removeRoles(rows: any[]): void {
    const roles = rows.map(x => x.data) as Role[];
    const config = {
      headerText: 'Remove members',
      submitText: 'Ok',
      closeText: 'Cancel',
      onSubmit: () => this.doRemoveRoles(roles),
      onDismiss: () => {
      },
      notifications: [
        'Are you sure to remove the following role(s) from this user?',
        roles.map(x => x.name).join(', ')
      ]
    };
    this.dynamicFormService.popNotification(config);
  }

  doRemoveRoles(roles: Role[]): void {
    // Members were removed if they are not in the list of addedMembers, otherwise they are un-added
    roles.forEach(u => {
      const idx = this.addedRoles.findIndex(x => x.id === u.id);

      if (idx > -1) {
        this.addedRoles.splice(idx, 1);
      } else {
        this.removedRoles.push(u);
      }

      const idx2 = this.roles.findIndex(x => x.id === u.id);
      this.roles.splice(idx2, 1);
    });

    this.buildTableSettings();
  }

}
