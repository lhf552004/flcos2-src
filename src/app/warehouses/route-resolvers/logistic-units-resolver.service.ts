import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LogisticUnit } from '../shared/models/logistic-unit.model';
import { WarehouseService } from '../shared/warehouse.service';

@Injectable({
  providedIn: 'root'
})
export class LogisticUnitsResolverService {

  constructor(private warehouseService: WarehouseService, private router: Router) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LogisticUnit[]> {
    const id = route.paramMap.get('warehouseId');
    console.log(id)
    return this.warehouseService.getLogisticUnits(id);
  }
}