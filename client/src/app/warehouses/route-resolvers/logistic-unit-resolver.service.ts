import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LogisticUnit } from '../shared/models/logistic-unit.model';
import { WarehouseService } from '../shared/warehouse.service';
import {LogisticUnitsService} from '../shared/logistic-units.service';

@Injectable({
  providedIn: 'root'
})
export class LogisticUnitResolverService {

  constructor(private logisticUnitsService: LogisticUnitsService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LogisticUnit> {
    const id = route.paramMap.get('luId');
    return this.logisticUnitsService.get(id);
  }
}
