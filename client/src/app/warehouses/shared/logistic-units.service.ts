import {Injectable} from '@angular/core';
import {GenericBaseService} from '../../shared/services/generic-base.service';
import {LogisticUnit} from './models/logistic-unit.model';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogisticUnitsService extends GenericBaseService<LogisticUnit> {

  constructor(http: HttpClient) {
    super(http, 'api/v1/logistic-units');
  }

  getAllByWarehouse(warehouseId: string) {
    const url = `${this.url}/wh/${warehouseId}`;
    return this.http.get<LogisticUnit[]>(url).pipe(tap(l => {
      this.objects$.next(l);
    }));
  }
}
