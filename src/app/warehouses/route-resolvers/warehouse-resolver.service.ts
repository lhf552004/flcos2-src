import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LogisticUnit } from '../shared/models/logistic-unit.model';
import { Warehouse } from '../shared/models/warehouse.model';
import { WarehouseService } from '../shared/warehouse.service';

@Injectable({
  providedIn: 'root'
})
export class WarehouseResolverService {

  constructor(private warehouseService: WarehouseService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Warehouse> {
    const id = route.paramMap.get('warehouseId');
    return this.warehouseService.get(id);
  }
}
