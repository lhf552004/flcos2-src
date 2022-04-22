import { Injectable } from '@angular/core';
import {ConveyingStationService} from '../shared/conveying-station.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ConveyingStation} from '../shared/models/conveying-station.model';
import {DischargerService} from '../shared/discharger.service';
import {Discharger} from '../shared/models/discharger.model';

@Injectable({
  providedIn: 'root'
})
export class DischargersResolverService {

  constructor(private dischargerService: DischargerService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Discharger[]> {
    return this.dischargerService.getAll();
  }
}
