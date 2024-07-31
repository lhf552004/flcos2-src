import { Injectable } from '@angular/core';
import {OrderService} from '../shared/order.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Order} from '../shared/models/order.model';
import {SchemeService} from '../../shared/services/scheme.service';
import {Scheme} from '../../shared/models/scheme.model';

@Injectable({
  providedIn: 'root'
})
export class OrderSchemeResolverService {

  private orderSchemeName = 'Order_Scheme';

  constructor(private schemeService: SchemeService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Scheme> {
    return this.schemeService.getSchemeByName(this.orderSchemeName);
  }
}
