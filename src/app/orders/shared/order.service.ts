import { Injectable } from '@angular/core';
import {Product} from '../../products/shared/models/product.model';
import {Observable, of} from 'rxjs';
import {Order} from './models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  orders: Order[] = [
    {
      id: '60266424',
      status: 'New',
      lastChange: '2021-08-26T09:30:43:345',
      internalOrder: true,
      attributes: [{
        key: 'erp_body_data',
        attribute: {
          id: '618589669',
          name: 'erp_body_data',
          type: 'STRUCT',
          suffix: 'erp_body_data',
          attributes: []
        }
      }],
      template: {
        id: '49075898',
        name: 'Standard Run',
        nextId: '21',
        valid: true,
        parent: null,
        selector: '49085817',
        leadTime: null,
        group: {
          id: '57100',
          name: 'complete process'
        },
        templateType: 'WITH_MATCHER',
        matcherValid: true,
        comment: '',
        graphics: '',
        variants: []
      }
    }
  ];

  getOrder(id: string): Observable<Order> {
    return of(this.orders.find(p => p.id === id) as Order);
  }

  getOrders(): Observable<Order[]> {
    return of(this.orders);
  }
}
