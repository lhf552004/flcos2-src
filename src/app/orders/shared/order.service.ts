import {Injectable} from '@angular/core';
import {Product} from '../../products/shared/models/product.model';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Order} from './models/order.model';
import {environment} from '../../../environments/environment';
import {MenuItem} from '../../core/layout/menu/menu-item';
import {HttpClient} from '@angular/common/http';
import {OrderAttribute} from './models/order-attribute.model';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderUrl = environment.baseUrl + 'api/v1/orders';  // URL to web api
  orders$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);


  constructor(private http: HttpClient) {
  }

  orders: Order[] = [
    {
      id: '60266424',
      status: 'New',
      lastChange: '2021-08-26T09:30:43:345',
      internalOrder: true,
      attributes: {
        erp_body_data: {
          id: '618589669',
          name: 'erp_body_data',
          type: 'array',
          suffix: 'erp_body_data',
          attributes: {
            vinCode: {
              id: '1',
              name: 'vinCode',
              type: 'string',
              value: 'LFC9888TG3000NH',
              suffix: '',
              attributes: {}
            },
            bodyType: {
              id: '2',
              name: 'bodyType',
              type: 'string',
              value: 'DB',
              suffix: '',
              attributes: {}
            },
            firstColorCode: {
              id: '3',
              name: 'firstColorCode',
              type: 'string',
              value: '10',
              suffix: '',
              attributes: {}
            },
            secondColorCode: {
              id: '4',
              name: 'secondColorCode',
              type: 'string',
              value: '20',
              suffix: '',
              attributes: {}
            },
            carCategory: {
              id: '5',
              name: 'carCategory',
              type: 'string',
              value: '-Y',
              suffix: '',
              attributes: {}
            },
            roofWindow: {
              id: '6',
              name: 'carCategory',
              type: 'string',
              value: '-Y',
              suffix: '',
              attributes: {}
            },
            orderNumber: {
              id: '7',
              name: 'orderNumber',
              type: 'string',
              value: 'H1000309033',
              suffix: '',
              attributes: {}
            },
            orderType: {
              id: '8',
              name: 'orderType',
              type: 'string',
              value: '01',
              suffix: '',
              attributes: {}
            },
            plantId: {
              id: '9',
              name: 'plantId',
              type: 'string',
              value: 'H',
              suffix: '',
              attributes: {}
            },
            twoTonedCar: {
              id: '10',
              name: 'twoTonedCar',
              type: 'string',
              value: 'H',
              suffix: '',
              attributes: {}
            }
          }
        }
      },
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

  getOrders(page: number, size: number): Observable<Order[]> {
    const url = `${this.orderUrl}/?page=${page}&size=${size}`;
    return this.http.get<Order[]>(url);
  }

  create(attributes: { [key: string]: OrderAttribute }): Observable<any> {
    const url = `${this.orderUrl}`;
    const payload = {
      isInternal: true,
      attributes
    };
    return this.http.post(url, payload).pipe(tap(x => {
        const newOrder: Order = {
          id: x,
          status: 'new',
          lastChange: (new Date()).toString(),
          internalOrder: true,
          attributes,
          template: null
        };
        const orders = this.orders$.getValue();
        orders.push(newOrder);
        this.orders$.next(orders);
    }));
  }
}
