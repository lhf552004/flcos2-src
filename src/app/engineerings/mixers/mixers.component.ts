import { Component, OnInit } from '@angular/core';
import {DischargerService} from '../shared/discharger.service';
import {EquipmentsComponent} from '../equipments/equipments.component';
import {Filler} from '../shared/models/filler.model';
import {Mixer} from '../shared/models/mixer.model';
import {MixerService} from '../shared/mixer.service';
import { DynamicFormService, CustomValidators } from 'dynamic-form';
import { DataTableColumnDefinition } from 'data-table';
import { FieldConfig } from 'dynamic-form/lib/models/field-config.interface';

@Component({
  selector: 'flcos-mixers',
  templateUrl: './mixers.component.html',
  styleUrls: ['./mixers.component.scss']
})
export class MixersComponent extends EquipmentsComponent<Mixer> {

  constructor(mixerService: MixerService, dynamicFormService: DynamicFormService) {
    super(mixerService, dynamicFormService);
  }

  getColumnDefinitions(): DataTableColumnDefinition[] {
    return [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '2', name: 'name', label: 'Name', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '3', name: 'index', label: 'Index', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '3', name: 'status', label: 'Status', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '4', name: 'mixerType', label: 'Type', type: 'text', visible: true, searchable: false, filterMode: 'none'},
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
    return 'Create a Mixer';
  }

  getHeaderForView(): string {
    return 'View the Mixer';
  }

  getHeaderForDelete(): string {
    return 'Confirm to delete the Mixer';
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
    return {dischargers: [], fillers: []};
  }

  getEquipmentName(): string {
    return 'Mixer';
  }

}
