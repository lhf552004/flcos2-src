import {Injectable} from '@angular/core';
import {ReceiptsService} from '../shared/receipts.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Receipt} from '../shared/models/receipt.model';
import {ProductsService} from '../shared/products.service';
import {Product} from '../shared/models/product.model';
import {SimpleBase} from '../../shared/models/simple-base.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService {

  constructor(private productsService: ProductsService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SimpleBase[]> {
    return this.productsService.getSimpleAll();
  }
}
