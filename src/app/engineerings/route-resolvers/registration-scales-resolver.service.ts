import { Injectable } from '@angular/core';
import {ProcessStationService} from '../shared/process-station.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProcessStation} from '../shared/models/process-station.model';
import {RegistrationScaleService} from '../shared/registration-scale.service';
import {RegistrationScale} from '../shared/models/registration-scale.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationScalesResolverService {

  constructor(private registrationScaleService: RegistrationScaleService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RegistrationScale[]> {
    return this.registrationScaleService.getAll();
  }
}
