import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {faExternalLinkAlt, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {DataTableColumnDefinition, DataTableSettings, DataTableToolbarControl} from 'data-table';
import {DynamicFormService, ModalConfig, CustomValidators} from 'dynamic-form';
import {UserService} from '../../core/user/user.service';
import {User} from '../../core/user/models/user.model';
import {UserViewerComponent} from '../user-viewer/user-viewer.component';
import {Role} from '../../core/user/models/role.model';

@Component({
  selector: 'emes-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  settings: DataTableSettings;
  // Indicator whether current user is admin
  isAdmin = true;
  // Used for cleaning subscription
  private unsubscribe: Subject<void> = new Subject();

  constructor(private userService: UserService, private dynamicFormService: DynamicFormService) {
  }

  ngOnInit(): void {
    const columnDefinition: DataTableColumnDefinition[] = [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '2', name: 'name', label: 'Name', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '3', name: 'roles.length', label: 'Roles', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {
        id: '4',
        name: 'view',
        label: 'View',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.viewUser.bind(this)
      },
      {
        id: '5',
        name: 'delete',
        label: 'Delete',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.deleteUser.bind(this)
      },
    ];
    this.userService.users$.pipe(takeUntil(this.unsubscribe)).subscribe(users => {
      this.settings = {
        selectableRows: false,
        columnDefinitions: columnDefinition,
        data: users.map(t => ({...t, name: t.firstName + ' ' + t.lastName, view: faExternalLinkAlt, delete: faTrash})),
        toolBar: {
          right: [
            ...this.isAdmin ? [{
              name: 'New User',
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
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  createUser() {
    const config: ModalConfig = {
      headerText: 'Create a user',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: { userName: string, firstName: string, lastName: string, password: string }) => this.doCreateUser(e),
      onDismiss: (e: string) => {
      },
      extraButtons: [],
      fields: [
        {
          type: 'input',
          label: 'User name',
          name: 'userName',
          placeholder: 'Enter a user name',
          validation: [
            CustomValidators.required('User name required'),
          ]
        },
        {
          type: 'input',
          label: 'First name',
          name: 'firstName',
          placeholder: 'Enter the first name',
          validation: [
            CustomValidators.required('First name required'),
          ]
        },
        {
          type: 'input',
          label: 'Last name',
          name: 'lastName',
          placeholder: 'Enter the last name',
          validation: [
            CustomValidators.required('Last name required'),
          ]
        },
        {
          type: 'input',
          label: 'Password',
          name: 'password',
          placeholder: 'Enter the password',
          validation: [
            CustomValidators.required('Password required'),
          ]
        }
      ]
    };
    this.dynamicFormService.popDynamicFormModal(config);
  }

  private doCreateUser(e: {userName: string, firstName: string, lastName: string, password: string}) {
    this.userService.createUser(e).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  viewUser(user: User) {
    const config = {
      user,
      onSubmit: (changes: { addedRoles: Role[], removedRoles: Role[] }) => this.processChanges(user, changes),
      onDismiss: (e: string) => {
      }
    };

    this.dynamicFormService.popModal(UserViewerComponent, config);
  }

  private processChanges(user, changes: any) {
    if (changes && changes.addedRoles && changes.addedRoles.length > 0) {

    }
    if (changes && changes.removedRoles && changes.removedRoles.length > 0) {

    }
  }

  deleteUser() {

  }

}
