import {Component, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Product} from '../../products/shared/models/product.model';
import {faProductHunt} from '@fortawesome/free-brands-svg-icons';
import {ActivatedRoute} from '@angular/router';
import {combineLatest, Observable, Subject} from 'rxjs';
import {MenuItem} from '../../shared/side-bar/models/menu-items.model';
import {Order} from '../shared/models/order.model';
import {DataTableSettings, DataTableColumnDefinition, DataTableToolbarControl} from 'data-table';
import {faExternalLinkAlt, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {OrderService} from '../shared/order.service';
import {Scheme} from '../../shared/models/scheme.model';
import {SchemeField} from '../../shared/models/scheme-field.model';
import {OrderAttribute} from '../shared/models/order-attribute.model';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from '../../core/user/user.service';
import {DynamicFormService, ModalConfig, CustomValidators} from 'dynamic-form';
import {Role} from '../../core/user/models/role.model';
import {UserViewerComponent} from '../../admin/user-viewer/user-viewer.component';
import {OrderViewerComponent} from '../order-viewer/order-viewer.component';

@Component({
  selector: 'emes-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  settings: DataTableSettings;
  // Indicator whether current user is admin
  isAdmin = true;
  closeResult = '';

  orderScheme: Scheme;

  // Preferences of order columns
  LOCAL_STORAGE_PREFERENCES = 'ORDERS';

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute,
              private orderService: OrderService,
              private translateService: TranslateService,
              private dynamicFormService: DynamicFormService) {
  }

  ngOnInit(): void {
    // TODO: set customized order columns
    const preferences = this.getPreferences();

    const observables: Observable<any>[] = [];
    observables.push(this.route.data.pipe(takeUntil(this.unsubscribe)));
    observables.push(this.orderService.orders$.pipe(takeUntil(this.unsubscribe)));
    combineLatest(observables).subscribe(x => {
      const columnDefinitions: DataTableColumnDefinition[] = [
        {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
        {id: '2', name: 'status', label: 'Status', type: 'text', visible: true, searchable: false, filterMode: 'text'},
        {id: '2', name: 'template.name', label: 'Template', type: 'text', visible: true, searchable: false, filterMode: 'text'},
        {id: '2', name: 'lastChange', label: 'LastChange', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      ];
      this.orderScheme = x[0].scheme;
      const orders: Order[] = x[1];
      this.setDynamicColumns(this.orderScheme.fields, columnDefinitions);
      columnDefinitions.push({
          id: '4',
          name: 'view',
          label: 'View',
          type: 'icon',
          visible: true,
          searchable: false,
          filterMode: 'none',
          click: this.viewOrder.bind(this)
        },
        {
          id: '5',
          name: 'delete',
          label: 'Delete',
          type: 'icon',
          visible: true,
          searchable: false,
          filterMode: 'none',
          click: this.deleteOrder.bind(this)
        });
      this.settings = {
        selectableRows: false,
        columnDefinitions,
        data: orders.map(o => ({...o, ...this.getValueForRecord(this.orderScheme, o), view: faExternalLinkAlt, delete: faTrash})),
        toolBar: {
          right: [
            ...this.isAdmin ? [{
              name: 'New Order',
              type: 'button',
              icon: faPlus,
              callback: this.createOrder.bind(this)
            } as DataTableToolbarControl] : [],
            {type: 'filter'} as DataTableToolbarControl
          ]
        },
        groupBy: []
      };
    });
  }

  setDynamicColumns(fields: SchemeField[], columnDefinitions: DataTableColumnDefinition[]): void {
    fields.forEach(field => {
      if (field.type === 'array') {
        this.setDynamicColumns(field.fields, columnDefinitions);
      } else if (field.type === 'struct') {

      } else {
        columnDefinitions.push({
          id: field.id,
          name: field.name,
          label: field.name,
          type: 'text',
          visible: true,
          searchable: false,
          filterMode: 'text'
        });
      }
    });
  }

  getValueForRecord(scheme: Scheme, order: Order): any {
    const final: any = {};
    scheme.fields.forEach(field => {
      const attribute: OrderAttribute = order.attributes[field.name];
      if (attribute) {
        this.setValueFromOrderAttribute(attribute, field, final);
      }
    });
    return final;
  }

  setValueFromOrderAttribute(orderAttribute: OrderAttribute, field: SchemeField, final: any): void {
    if (field.type === 'array') {
      field.fields.forEach(subField => {
        const subAttribute = orderAttribute.attributes[subField.name];
        if (subAttribute) {
          this.setValueFromOrderAttribute(subAttribute, subField, final);
        }
      });
    } else if (field.type === 'struct') {

    } else {
      final[field.name] = orderAttribute.value;
    }
  }

  getPreferences() {
    const pref = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_PREFERENCES));
    return pref;
  }

  createOrder() {
    const config: ModalConfig = {
      headerText: 'Create a user',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: any) => this.doCreateOrder(e),
      onDismiss: (e: string) => {
      },
      extraButtons: [],
      fields: []
    };
    this.orderScheme.fields.forEach(field => {
      this.setFieldsByOrderScheme('', field, config.fields);
    });
    this.dynamicFormService.popDynamicFormModal(config);
  }

  getEmptyAttributesByField(fields: SchemeField[]): { [key: string]: OrderAttribute } {
    const attributes: { [key: string]: OrderAttribute } = {};
    fields.forEach(field => {
      attributes[field.name] = {
        id: '',
        name: field.name,
        type: field.type,
        value: '',
        suffix: '',
        attributes: {}
      };
      if (field.type === 'array') {
        this.getEmptyAttributesByField(field.fields);
      } else if (field.type === 'struct') {

      } else {
      }
    });
    return attributes;
  }

  setFieldsByOrderScheme(parentName: string, field: SchemeField, fieldConfigs: any[]) {
    const theFieldName = parentName !== '' ? parentName + '.' + field.name : field.name;
    if (field.type.toLowerCase() === 'array') {
      field.fields.forEach(subField => this.setFieldsByOrderScheme(theFieldName, subField, fieldConfigs));
    } else if (field.type.toLowerCase() === 'struct') {

    } else {
      fieldConfigs.push({
        type: 'input',
        label: field.name,
        name: theFieldName,
        placeholder: 'Enter ' + field.name,
        validation: [
          CustomValidators.required(field.name + ' required'),
        ]
      });
    }
  }

  doCreateOrder(e: any) {
    const attributes = {};
    this.orderScheme.fields.forEach(field => this.setAttributes('', field, e, attributes));
    this.orderService.create(attributes).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  setAttributes(parentName: string, field: SchemeField, results: any, attributes: { [key: string]: OrderAttribute }): void {
    const theFieldName = parentName !== '' ? parentName + '.' + field.name : field.name;
    attributes[field.name] = {
      id: '',
      name: field.name,
      type: field.type,
      value: '',
      suffix: '',
      attributes: {}
    };
    if (field.type.toLowerCase() === 'array') {
      field.fields.forEach(subField => this.setAttributes(theFieldName, subField, results, attributes[field.name].attributes));
    } else if (field.type.toLowerCase() === 'struct') {

    } else {
      attributes[field.name].value = results[theFieldName];
    }
  }

  viewOrder() {

  }

  deleteOrder() {

  }

}
