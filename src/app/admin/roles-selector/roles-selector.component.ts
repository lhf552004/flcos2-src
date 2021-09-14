import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Role} from '../../core/user/models/role.model';
import {DataTableSettings, DataTableColumnDefinition, DataTableToolbarControl} from 'data-table';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'emes-roles-selector',
  templateUrl: './roles-selector.component.html',
  styleUrls: ['./roles-selector.component.scss']
})
export class RolesSelectorComponent implements OnInit, OnDestroy {

  @Input() config: { roles: Role[] };

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  dismissed: EventEmitter<any> = new EventEmitter<any>();

  // Indicate roles selected
  roleSelected = false;

  // The datatable settings
  settings: DataTableSettings;

  // The list of group members, name and description of the group.
  // A deep copy of the config.group object is needed in case user decide to cancel the form
  roles: Role[] = [];

  selectedRoles: Role[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.buildTableSettings();
  }

  ngOnDestroy(): void {

  }

  buildTableSettings(): void {
    this.roles = this.config.roles;
    const columnDefinition: DataTableColumnDefinition[] = [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: true, filterMode: 'none'},
      {id: '2', name: 'name', label: 'Role name', type: 'text', visible: true, searchable: true, filterMode: 'select'}
    ];

    this.settings = {
      selectableRows: true,
      columnDefinitions: columnDefinition,
      data: this.roles.map(r => ({...r, icon: faTrash})),
      toolBar: {
        left: [{name: 'Select', type: 'button', callback: this.selectRoles.bind(this)} as DataTableToolbarControl],
        right: [{type: 'search'} as DataTableToolbarControl]
      },
      groupBy: []
    };
  }

  selectRoles(rows: any[]) {
    this.selectedRoles = this.roles.filter(r => rows.map(x => x.data.id).includes(r.id));
    if (this.selectedRoles.length > 0) {
      this.roleSelected = true;
    } else {
      this.roleSelected = false;
    }
  }

  submitForm(method: string) {
    this.submitted.emit(this.selectedRoles);
  }

  dismissForm(method: string) {
    this.dismissed.emit(method);
  }

}
