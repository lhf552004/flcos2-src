import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EquipmentService } from '../shared/equipment.service';
import { Equipment } from '../shared/models/equipment.model';
@Injectable({
  providedIn: 'root'
})
export class EquipmentsResolverService {

  constructor(private equipmentService: EquipmentService, private router: Router) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Equipment[]> {
    return this.equipmentService.getEquipments();
  }
}
