import {Component, OnInit} from '@angular/core';
import {EquipmentsComponent} from '../equipments/equipments.component';
import {ConveyingStation} from '../shared/models/conveying-station.model';
import {ConveyingStationService} from '../shared/conveying-station.service';
import {DynamicFormService, CustomValidators} from 'dynamic-form';
import {DataTableColumnDefinition} from 'data-table';
import {FieldConfig} from 'dynamic-form/lib/models/field-config.interface';

@Component({
  selector: 'flcos-conveying-stations',
  templateUrl: './conveying-stations.component.html',
  styleUrls: ['./conveying-stations.component.scss']
})
export class ConveyingStationsComponent extends EquipmentsComponent<ConveyingStation> {

  constructor(conveyingStationService: ConveyingStationService, dynamicFormService: DynamicFormService) {
    super(conveyingStationService, dynamicFormService);
  }

  getColumnDefinitions(): DataTableColumnDefinition[] {
    return [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '2', name: 'name', label: 'Name', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '3', name: 'status', label: 'Status', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '4', name: 'isProduction', label: 'Is Production', type: 'text', visible: true, searchable: false, filterMode: 'none'},
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
    return 'Create a Conveying station';
  }

  getHeaderForView(): string {
    return 'View the Conveying station';
  }

  getHeaderForDelete(): string {
    return 'Confirm to delete the Conveying station';
  }

  getFields(): FieldConfig[] {
    return [
      {
        type: 'select',
        label: 'Category',
        name: 'category',
        placeholder: 'Select the category',
        options: ['Category1', 'Category2', 'Category3'].map(c => ({
          key: c,
          value: c
        })),
        validation: [
          CustomValidators.required('Category required'),
        ]
      },
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
    return {dischargers: [], fillers: [], status: ''};
  }

  getEquipmentName(): string {
    return 'Conveying Station';
  }
}
