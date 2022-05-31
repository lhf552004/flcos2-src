import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {LogisticUnit} from './models/logistic-unit.model';
import {Warehouse} from './models/warehouse.model';
import {GenericBaseService} from '../../shared/services/generic-base.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService extends GenericBaseService<Warehouse> {

  constructor(http: HttpClient) {
    super(http, 'api/v1/warehouses');
  }
}
