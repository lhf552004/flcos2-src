import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EquipmentService } from '../shared/equipment.service';
import { Section } from '../shared/models/section.model';

@Injectable({
  providedIn: 'root'
})
export class SectionsResolverService {

  constructor(private equipmentService: EquipmentService, private router: Router) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Section[]> {
    return this.equipmentService.getSections();
  }
}