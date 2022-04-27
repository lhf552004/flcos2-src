import {Injectable} from '@angular/core';
import {GenericBaseService} from '../../shared/services/generic-base.service';
import {Receipt} from './models/receipt.model';
import {Product} from './models/product.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {SimpleBase} from '../../shared/models/simple-base.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = environment.baseUrl + 'api/v1/products';  // URL to web api
  public readonly simpleProducts$: BehaviorSubject<SimpleBase[]> = new BehaviorSubject<SimpleBase[]>([]);

  constructor(private http: HttpClient) {
  }

  // Get the all list
  getSimpleAll(): Observable<SimpleBase[]> {
    const url = `${this.url}/all`;
    return this.http.get<SimpleBase[]>(url).pipe(tap(l => {
      this.simpleProducts$.next(l);
    }));
  }
}
