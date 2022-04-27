import {Injectable} from '@angular/core';
import {ProductsService} from '../shared/products.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Product} from '../shared/models/product.model';
import {SuppliersService} from '../shared/suppliers.service';
import {Supplier} from '../shared/models/supplier.model';
import {SimpleBase} from '../../shared/models/simple-base.model';

@Injectable({
  providedIn: 'root'
})
export class SuppliersResolverService {

  constructor(private suppliersService: SuppliersService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SimpleBase[]> {
    return this.suppliersService.getSimpleAll();
  }
}
