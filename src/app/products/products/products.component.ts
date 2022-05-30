import { Component } from '@angular/core';
import { Product } from '../shared/models/product.model';
import {BaseObjectsComponent} from '../../shared/base-objects.component';
import { DynamicFormService, CustomValidators } from 'dynamic-form';
import {ProductService} from '../shared/product.service';
import { DataTableColumnDefinition } from 'data-table';

@Component({
  selector: 'emes-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseObjectsComponent<Product> {

  constructor(
    productService: ProductService,
    dynamicFormService: DynamicFormService) {
    super(productService, dynamicFormService);
  }

  getColumnDefinitions(): DataTableColumnDefinition[] {
    return [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '2', name: 'name', label: 'Name', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '3', name: 'productType', label: 'Type', type: 'text', visible: true, searchable: false, filterMode: 'text'},
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

  getFields(object: Product): any[] {
    return [
      {
        type: 'input',
        label: 'Name',
        name: 'name',
        value: object !== null ? object.name : '',
        placeholder: 'Enter the product name',
        validation: [
          CustomValidators.required('Product name required'),
        ]
      },
      {
        type: 'select',
        label: 'Type',
        name: 'productType',
        placeholder: 'Select the product type',
        options: ['Raw', 'FinishedProduct', 'SemiProduct'].map(c => ({
          key: c,
          value: c
        })),
        validation: [
          CustomValidators.required('Product type required'),
        ]
      }

    ];
  }

  getHeaderForDelete(): string {
    return 'Confirm to delete the product';
  }

  getHeaderForNew(): string {
    return 'Create a Product';
  }

  getHeaderForView(): string {
    return 'View the Product';
  }

  getObjectTypeName(): string {
    return 'Product';
  }
}
