import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {SimpleBase} from '../../shared/models/simple-base.model';
import {ProductsService} from '../../shared/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService {

  constructor(private productService: ProductsService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SimpleBase[]> {
    return this.productService.getSimpleAll();
  }
}
