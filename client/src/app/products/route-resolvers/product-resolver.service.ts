import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Product} from '../shared/models/product.model';
import {ProductService} from '../shared/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService {

  constructor(private productService: ProductService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id = route.paramMap.get('prodId');
    return this.productService.get(id as string);
  }
}
