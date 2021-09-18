import {Injectable} from '@angular/core';
import {OrderService} from '../shared/order.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Order} from '../shared/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersResolverService {

  constructor(private orderService: OrderService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order[]> {
    return this.orderService.getOrders(1, 50);
  }
}
