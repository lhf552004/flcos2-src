import { Component, OnInit } from '@angular/core';
import {ProcessStationService} from '../shared/process-station.service';
import {EquipmentsComponent} from '../equipments/equipments.component';
import {ProcessStation} from '../shared/models/process-station.model';
import {RegistrationScale} from '../shared/models/registration-scale.model';
import { DynamicFormService, CustomValidators } from 'dynamic-form';
import { DataTableColumnDefinition } from 'data-table';
import {RegistrationScaleService} from '../shared/registration-scale.service';
import { FieldConfig } from 'dynamic-form/lib/models/field-config.interface';

@Component({
  selector: 'flcos-registration-scales',
  templateUrl: './registration-scales.component.html',
  styleUrls: ['./registration-scales.component.scss']
})
export class RegistrationScalesComponent extends EquipmentsComponent<RegistrationScale> {

  constructor(registrationScaleService: RegistrationScaleService, dynamicFormService: DynamicFormService) {
    super(registrationScaleService, dynamicFormService);
  }

  getColumnDefinitions(): DataTableColumnDefinition[] {
    return [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '2', name: 'name', label: 'Name', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '4', name: 'index', label: 'Index', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {
        id: '5',
        name: 'view',
        label: 'View',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.view.bind(this)
      },
      {
        id: '6',
        name: 'delete',
        label: 'Delete',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.delete.bind(this)
      },
    ];
  }

  getHeaderForNew(): string {
    return 'Create a Registration Scale';
  }

  getHeaderForView(): string {
    return 'View the Registration Scale';
  }

  getHeaderForDelete(): string {
    return 'Confirm to delete the Registration Scale';
  }

  getFields(): FieldConfig[] {
    return [
      {
        type: 'input',
        label: 'Name',
        name: 'name',
        placeholder: 'Enter the name',
        validation: [
          CustomValidators.required('Name required'),
        ]
      },
      {
        type: 'number',
        label: 'Index',
        name: 'index',
        placeholder: 'Set the index',
        validation: [
          CustomValidators.required('Index required'),
        ]
      }
    ];
  }

  getDefaultProperties(): any {
    return {bin: null};
  }

  getEquipmentName(): string {
    return 'Registration Scale';
  }


}
