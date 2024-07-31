import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/product.model';
import { ProductService } from '../shared/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService {

  constructor(private productService: ProductService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    
    return this.productService.getProducts();
  }
}
