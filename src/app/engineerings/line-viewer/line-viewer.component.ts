import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {User} from '../../core/user/models/user.model';
import {Role} from '../../core/user/models/role.model';
import {Subject} from 'rxjs';
import {UserService} from '../../core/user/user.service';
import {RoleService} from '../../core/user/role.service';
import {faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {takeUntil} from 'rxjs/operators';
import {RolesSelectorComponent} from '../../admin/roles-selector/roles-selector.component';
import {DataTableSettings, DataTableColumnDefinition, DataTableToolbarControl} from 'data-table';
import {DynamicFormService, ModalConfig, CustomValidators} from 'dynamic-form';
import {LineService} from '../shared/line.service';
import {Section} from '../shared/models/section.model';
import {SectionService} from '../shared/section.service';
import {Line} from '../shared/models/line.model';

@Component({
  selector: 'flcos-line-viewer',
  templateUrl: './line-viewer.component.html',
  styleUrls: ['./line-viewer.component.scss']
})
export class LineViewerComponent implements OnInit, OnChanges, OnDestroy {

  @Input() config: {
    line: Line
  };

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  dismissed: EventEmitter<any> = new EventEmitter<any>();

  // The datatable settings
  settings: DataTableSettings;
  line: Line;
  sections: Section[] = [];
  name: string;
  description: string | undefined;

  // Used for cleaning subscription
  private unsubscribe: Subject<void> = new Subject();

  constructor(private dynamicFormService: DynamicFormService, private lineService: LineService) {
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
    this.line = this.config.line;
    this.name = this.line.name;
    this.sections = this.line.sections;
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
        click: this.removeSection.bind(this)
      },
    ];

    this.settings = {
      selectableRows: true,
      columnDefinitions: columnDefinition,
      data: this.sections.map(g => ({...g, icon: faTrash})),
      toolBar: {
        left: [
          {name: 'Remove', type: 'button', callback: this.removeSections.bind(this)} as DataTableToolbarControl
        ],
        right: [
          // @ts-ignore
          {name: 'Add Section', type: 'button', icon: faPlus, callback: this.addSection.bind(this)},
          {type: 'search'} as DataTableToolbarControl
        ]
      },
      groupBy: []
    };
  }

  submitForm(method: string) {
    this.submitted.emit({});
  }

  dismissForm(method: string) {
    this.dismissed.emit(method);
  }

  // Add a role to the user
  addSection(): void {
    const config: ModalConfig = {
      headerText: 'Create Section',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: { index: number, name: string, opcVariableIdent: string }) => this.doAddSection(e),
      onDismiss: (e: string) => {
      },
      extraButtons: [],
      fields: [
        {
          type: 'number',
          label: 'Index',
          name: 'index',
          placeholder: 'Set the index of new section',
          validation: [
            CustomValidators.required('Index required'),
          ]
        }, {
          type: 'input',
          label: 'Name',
          name: 'name',
          placeholder: 'Set the name of new section',
          validation: [
            CustomValidators.required('Name required'),
          ]
        }, {
          type: 'input',
          label: 'Opc Variable',
          name: 'opcVariableIdent',
          placeholder: 'Set the Opc Variable of new section',
          validation: []
        }
      ]
    };
    this.dynamicFormService.popDynamicFormModal(config);
  }

  doAddSection(newSection: { index: number, name: string, opcVariableIdent: string }): void {
    this.line.sections.push({...newSection, id: null, equipments: []});
    this.lineService.update(this.line.id, this.line).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.buildTableSettings();
    });
  }

  // Remove role from the user
  removeSection(row: any): void {
    this.removeSections([{data: row}]);
  }

  removeSections(rows: any[]): void {
    const sections = rows.map(x => x.data) as Section[];
    const config = {
      headerText: 'Remove Sections',
      submitText: 'Ok',
      closeText: 'Cancel',
      onSubmit: () => this.doRemoveSections(sections),
      onDismiss: () => {
      },
      notifications: [
        'Are you sure to remove the following section(s) from this line?',
        sections.map(x => x.name).join(', ')
      ]
    };
    this.dynamicFormService.popNotification(config);
  }

  doRemoveSections(sections: Section[]): void {
    const ids: string[] = sections.map(s => s.id);
    this.line.sections = this.line.sections.filter(s => ids.indexOf(s.id) === -1);
    this.lineService.update(this.line.id, this.line).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.buildTableSettings();
    });
  }


}
