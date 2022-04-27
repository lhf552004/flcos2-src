import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {GenericBaseService} from '../../shared/services/generic-base.service';
import {Supplier} from './models/supplier.model';
import {SimpleBase} from '../../shared/models/simple-base.model';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
  private url = environment.baseUrl + 'api/v1/suppliers';  // URL to web api
  public readonly simpleSuppliers$: BehaviorSubject<SimpleBase[]> = new BehaviorSubject<SimpleBase[]>([]);

  constructor(private http: HttpClient) {
  }

  // Get the all list
  getSimpleAll(): Observable<SimpleBase[]> {
    const url = `${this.url}/all`;
    return this.http.get<SimpleBase[]>(url).pipe(tap(l => {
      this.simpleSuppliers$.next(l);
    }));
  }
}
