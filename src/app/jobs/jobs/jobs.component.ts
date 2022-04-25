import {Component} from '@angular/core';
import {DataTableColumnDefinition} from 'data-table';

import {CustomValidators} from 'dynamic-form';
import {BaseObjectsComponent} from '../../shared/base-objects.component';
import {Job} from '../shared/models/job.model';
import {FieldConfig} from 'dynamic-form/lib/models/field-config.interface';

@Component({
  selector: 'flcos-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent extends BaseObjectsComponent<Job> {
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

  getDefaultProperties(): any {
    return {status: 'Created'};
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

  getHeaderForDelete(): string {
    return 'Confirm to delete the Job';
  }

  getHeaderForNew(): string {
    return 'Create a Job';
  }

  getHeaderForView(): string {
    return 'View the Job';
  }

  getObjectTypeName(): string {
    return 'Job';
  }


}
