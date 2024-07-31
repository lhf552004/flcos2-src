import { Component, OnInit } from '@angular/core';
import {EquipmentsComponent} from '../equipments/equipments.component';
import {Discharger} from '../shared/models/discharger.model';
import {Filler} from '../shared/models/filler.model';
import {DischargerService} from '../shared/discharger.service';
import { DynamicFormService, CustomValidators } from 'dynamic-form';
import {FillerService} from '../shared/filler.service';
import { DataTableColumnDefinition } from 'data-table';
import { FieldConfig } from 'dynamic-form/lib/models/field-config.interface';

@Component({
  selector: 'flcos-fillers',
  templateUrl: './fillers.component.html',
  styleUrls: ['./fillers.component.scss']
})
export class FillersComponent extends EquipmentsComponent<Filler> {

  constructor(fillerService: FillerService, dynamicFormService: DynamicFormService) {
    super(fillerService, dynamicFormService);
  }

  getColumnDefinitions(): DataTableColumnDefinition[] {
    return [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '2', name: 'name', label: 'Name', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '4', name: 'category', label: 'Category', type: 'text', visible: true, searchable: false, filterMode: 'none'},
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
    return 'Create a Filler';
  }

  getHeaderForView(): string {
    return 'View the Filler';
  }

  getHeaderForDelete(): string {
    return 'Confirm to delete the Filler';
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
      }
    ];
  }

  getDefaultProperties(): any {
    return {bin: null};
  }

  getEquipmentName(): string {
    return 'Filler';
  }
}
