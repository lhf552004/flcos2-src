import { Injectable } from '@angular/core';
import {SimpleBaseService} from './simple-base.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends SimpleBaseService{

  constructor(http: HttpClient) {
    super(http, 'api/v1/products');
  }
}

