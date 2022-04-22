import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ConveyingStationService} from '../shared/conveying-station.service';
import {ConveyingStation} from '../shared/models/conveying-station.model';

@Injectable({
  providedIn: 'root'
})
export class ConveyingStationsResolverService {

  constructor(private conveyingStationService: ConveyingStationService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ConveyingStation[]> {
    return this.conveyingStationService.getAll();
  }
}
