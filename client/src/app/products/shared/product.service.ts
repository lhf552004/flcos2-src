import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from './models/product.model';
import {GenericBaseService} from '../../shared/services/generic-base.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GenericBaseService<Product> {

  constructor(http: HttpClient) {
    super(http, 'api/v1/products');
  }

}
