import {Component, OnInit} from '@angular/core';
import {BaseObjectsComponent} from '../../shared/base-objects.component';
import {Job} from '../../jobs/shared/models/job.model';
import {Receipt} from '../shared/models/receipt.model';
import {FieldConfig} from 'dynamic-form/lib/models/field-config.interface';
import {DataTableColumnDefinition} from 'data-table';
import {CustomValidators, DynamicFormService} from 'dynamic-form';
import {ReceiptsService} from '../shared/receipts.service';
import {ProductsService} from '../shared/products.service';
import {SuppliersService} from '../shared/suppliers.service';

@Component({
  selector: 'flcos-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.scss']
})
export class ReceiptsComponent extends BaseObjectsComponent<Receipt> {

  constructor(
    receiptsService: ReceiptsService,
    private productsService: ProductsService,
    private suppliersService: SuppliersService,
    dynamicFormService: DynamicFormService) {
    super(receiptsService, dynamicFormService);
  }

  getColumnDefinitions(): DataTableColumnDefinition[] {
    return [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '2', name: 'batchNumber', label: 'Batch Number', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '3', name: 'quantity', label: 'Quantity', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '4', name: 'unitType', label: 'Unit type', type: 'text', visible: true, searchable: false, filterMode: 'none'},
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
    return {};
  }

  getFields(object: Receipt): FieldConfig[] {
    return [
      {
        type: 'input',
        label: 'Batch Number',
        name: 'batchNumber',
        value: object !== null ? object.batchNumber : null,
        placeholder: 'Enter the batch number',
        validation: [
          CustomValidators.required('Batch number required'),
        ]
      },
      {
        type: 'number',
        label: 'Quantity',
        name: 'quantity',
        value: object !== null ? object.quantity : null,
        placeholder: 'Enter the quantity',
        validation: [
          CustomValidators.required('Quantity required'),
        ]
      },
      {
        type: 'number',
        label: 'Unit',
        name: 'unit',
        value: object !== null ? object.unit : null,
        placeholder: 'Set the unit',
        validation: [
          CustomValidators.required('Unit type required'),
        ]
      },
      {
        type: 'select',
        label: 'Unit Type',
        name: 'unitType',
        placeholder: 'Select the unit type',
        options: ['Kilogram', 'Gram', 'Ton'].map(c => ({
          key: c,
          value: c
        })),
        validation: [
          CustomValidators.required('Unit type required'),
        ]
      },
      {
        type: 'select',
        label: 'Package Type',
        name: 'packageType',
        placeholder: 'Select the package type',
        options: ['Bag', 'Pallet', 'Tank'].map(c => ({
          key: c,
          value: c
        })),
        validation: [
          CustomValidators.required('Package type required'),
        ]
      },
      {
        type: 'select',
        label: 'Supplier',
        name: 'supplier',
        placeholder: 'Select the supplier',
        options: this.suppliersService.simpleSuppliers$.getValue().map(c => ({
          key: c,
          value: c.name
        })),
        validation: [
          CustomValidators.required('Supplier required'),
        ]
      },
      {
        type: 'select',
        label: 'Product',
        name: 'product',
        placeholder: 'Select the product',
        options: this.productsService.simpleProducts$.getValue().map(c => ({
          key: c,
          value: c.name
        })),
        validation: [
          CustomValidators.required('Product required'),
        ]
      }
    ];
  }

  getHeaderForDelete(): string {
    return 'Confirm to delete the receipt';
  }

  getHeaderForNew(): string {
    return 'Create a Receipt';
  }

  getHeaderForView(): string {
    return 'View the Receipt';
  }

  getObjectTypeName(): string {
    return 'Receipt';
  }
}
