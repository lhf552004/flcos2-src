import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {LineService} from '../../engineerings/shared/line.service';
import {takeUntil} from 'rxjs/operators';
import {faExternalLinkAlt, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Line} from '../../engineerings/shared/models/line.model';
import { DataTableSettings, DataTableColumnDefinition, DataTableToolbarControl } from 'data-table';
import { DynamicFormService, ModalConfig, CustomValidators } from 'dynamic-form';
import {ProcessVariableService} from '../shared/process-variable.service';
import {NewProcessVariable} from '../shared/models/new-process-variable.model';
import {ProcessVariable} from '../shared/models/process-variable.model';

@Component({
  selector: 'flcos-process-variables',
  templateUrl: './process-variables.component.html',
  styleUrls: ['./process-variables.component.scss']
})
export class ProcessVariablesComponent implements OnInit, OnDestroy {

  settings: DataTableSettings;
  // Indicator whether current user is admin
  isAdmin = true;
  closeResult = '';
  columnDefinitions: DataTableColumnDefinition[];

  types: string[] = ['VALUE', 'STATUS', 'COMMAND'];

  // Used for cleaning subscription
  private unsubscribe: Subject<void> = new Subject();

  constructor(private processVariableService: ProcessVariableService,
              private dynamicFormService: DynamicFormService) {
  }

  ngOnInit(): void {
    this.columnDefinitions = [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '2', name: 'variableName', label: 'Variable Name', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '3', name: 'type', label: 'Type', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '4', name: 'highHigh', label: 'High high', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '5', name: 'high', label: 'High', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '6', name: 'low', label: 'Low', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '7', name: 'lowLow', label: 'Low low', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {
        id: '8',
        name: 'view',
        label: 'View',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.viewProcessVariable.bind(this)
      },
      {
        id: '6',
        name: 'delete',
        label: 'Delete',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.deletePV.bind(this)
      },
    ];
    this.processVariableService.allProcessVariables$.pipe(takeUntil(this.unsubscribe)).subscribe(processVariables => {
      this.settings = {
        selectableRows: false,
        columnDefinitions: this.columnDefinitions,
        data: processVariables.map(l => ({
          ...l,
          view: faExternalLinkAlt,
          viewChildren: faExternalLinkAlt,
          delete: faTrash
        })),
        toolBar: {
          right: [
            ...this.isAdmin ? [{
              name: 'New Line',
              type: 'button',
              icon: faPlus,
              callback: this.create.bind(this)
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

  create() {
    const config: ModalConfig = {
      headerText: 'Create a process variable',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: NewProcessVariable) => this.doCreate(e),
      onDismiss: (e: string) => {
      },
      extraButtons: [],
      fields: [
        {
          type: 'input',
          label: 'Variable name',
          name: 'variableName',
          placeholder: 'Enter the variable name',
          validation: [
            CustomValidators.required('Variable name required'),
          ]
        },
        {
          type: 'select',
          label: 'Type',
          name: 'type',
          options: this.types.map(x => ({key: x, value: x})),
          placeholder: 'Choose type',
          validation: [
            CustomValidators.required('Type required'),
          ]
        },
        {
          type: 'number',
          label: 'High high',
          name: 'highHigh',
          placeholder: 'Enter the high high',
          validation: [
            CustomValidators.required('High high required'),
          ]
        },
        {
          type: 'number',
          label: 'High',
          name: 'high',
          placeholder: 'Enter the high',
          validation: [
            CustomValidators.required('High required'),
          ]
        },
        {
          type: 'number',
          label: 'Low',
          name: 'low',
          placeholder: 'Enter the low',
          validation: [
            CustomValidators.required('Low required'),
          ]
        },
        {
          type: 'number',
          label: 'Low low',
          name: 'lowLow',
          placeholder: 'Enter the low low',
          validation: [
            CustomValidators.required('Low low required'),
          ]
        },
        {
          type: 'input',
          label: 'Plc',
          name: 'plc',
          placeholder: 'Enter the Plc',
          validation: [
          ]
        },
        {
          type: 'input',
          label: 'Device',
          name: 'device',
          placeholder: 'Enter the device',
          validation: [
          ]
        }
      ]
    };
    this.dynamicFormService.popDynamicFormModal(config);
  }

  doCreate(newProcessVariable: NewProcessVariable): void {
    newProcessVariable = {...newProcessVariable};
    this.processVariableService.create(newProcessVariable).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  viewProcessVariable(processVariable: ProcessVariable) {
    const config: ModalConfig = {
      headerText: 'View a process variable',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: ProcessVariable) => this.doUpdatePV(processVariable, e),
      onDismiss: (e: string) => {
      },
      extraButtons: [],
      fields: [
        {
          type: 'input',
          label: 'Variable name',
          name: 'variableName',
          value: processVariable.variableName,
          placeholder: 'Enter the variable name',
          validation: [
            CustomValidators.required('Variable name required'),
          ]
        },
        {
          type: 'select',
          label: 'Type',
          name: 'type',
          value: processVariable.type,
          options: this.types.map(x => ({key: x, value: x})),
          placeholder: 'Choose type',
          validation: [
            CustomValidators.required('Type required'),
          ]
        },
        {
          type: 'number',
          label: 'High high',
          name: 'highHigh',
          value: processVariable.highHigh,
          placeholder: 'Enter the high high',
          validation: [
            CustomValidators.required('High high required'),
          ]
        },
        {
          type: 'number',
          label: 'High',
          name: 'high',
          value: processVariable.high,
          placeholder: 'Enter the high',
          validation: [
            CustomValidators.required('High required'),
          ]
        },
        {
          type: 'number',
          label: 'Low',
          name: 'low',
          value: processVariable.low,
          placeholder: 'Enter the low',
          validation: [
            CustomValidators.required('Low required'),
          ]
        },
        {
          type: 'number',
          label: 'Low low',
          name: 'lowLow',
          value: processVariable.lowLow,
          placeholder: 'Enter the low low',
          validation: [
            CustomValidators.required('Low low required'),
          ]
        },
        {
          type: 'input',
          label: 'Plc',
          name: 'plc',
          value: processVariable.plc,
          placeholder: 'Enter the Plc',
          validation: [
          ]
        },
        {
          type: 'input',
          label: 'Device',
          name: 'device',
          value: processVariable.device,
          placeholder: 'Enter the device',
          validation: [
          ]
        }
      ]
    };
    this.dynamicFormService.popDynamicFormModal(config);
  }

  doUpdatePV(line: ProcessVariable, updated: ProcessVariable): void {
    this.processVariableService.update(line.id, updated).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  deletePV(processVariable: ProcessVariable) {
    const config = {
      headerText: 'Confirm Delete Process Variable.',
      submitText: 'Ok',
      closeText: 'Cancel',
      onSubmit: () => this.doDelete(processVariable),
      onDismiss: () => {
      },
      notifications: [`Are you Sure you want to delete process variable '${processVariable.variableName}'?`]
    };
    this.dynamicFormService.popNotification(config);
  }

  doDelete(processVariable: ProcessVariable) {
    this.processVariableService.delete(processVariable.id).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
    });
  }
}
