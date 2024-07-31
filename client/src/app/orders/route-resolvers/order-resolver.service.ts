import { Injectable } from '@angular/core';
import {ProductService} from '../../products/shared/product.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Product} from '../../products/shared/models/product.model';
import {OrderService} from '../shared/order.service';
import {Order} from '../shared/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderResolverService {

  constructor(private orderService: OrderService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order> {
    const id = route.paramMap.get('orderId');
    return this.orderService.getOrder(id as string);
  }
}
