import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products: Product[] = [
    {
      id: '821c6f60-c7b5-4090-ad6a-0cd25cd4cdfb',
      name: 'Corn',
      type: 'Raw'
    },
    {
      id: '6e386b40-9684-4ebd-be32-8f4d8ddcb650',
      name: 'Product1',
      type: 'Finished Product'
    },
    {
      id: 'e7dcecae-b6b7-486f-b9df-e6e638d4e98b',
      name: 'Semi product1',
      type: 'Semi-Product'
    }
  ];

  getProduct(id: string): Observable<Product> {
    return of(this.products.find(p => p.id === id));
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  
}
