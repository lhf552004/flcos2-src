import { Component, OnInit } from '@angular/core';
import {ProcessStationService} from '../shared/process-station.service';
import {EquipmentsComponent} from '../equipments/equipments.component';
import {RegistrationScale} from '../shared/models/registration-scale.model';
import {Scale} from '../shared/models/scale.model';
import {ScaleService} from '../shared/scale.service';
import { DynamicFormService, CustomValidators } from 'dynamic-form';
import { DataTableColumnDefinition } from 'data-table';
import { FieldConfig } from 'dynamic-form/lib/models/field-config.interface';

@Component({
  selector: 'flcos-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.scss']
})
export class ScalesComponent extends EquipmentsComponent<Scale> {

  constructor(scaleService: ScaleService, dynamicFormService: DynamicFormService) {
    super(scaleService, dynamicFormService);
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
    return 'Create a Process Station';
  }

  getHeaderForView(): string {
    return 'View the Process Station';
  }

  getHeaderForDelete(): string {
    return 'Confirm to delete the Process Station';
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
    return 'Process Station';
  }

}
