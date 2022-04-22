import { Injectable } from '@angular/core';
import {RegistrationScaleService} from '../shared/registration-scale.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {RegistrationScale} from '../shared/models/registration-scale.model';
import {ScaleService} from '../shared/scale.service';
import {Scale} from '../shared/models/scale.model';

@Injectable({
  providedIn: 'root'
})
export class ScalesResolverService {

  constructor(private scaleService: ScaleService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Scale[]> {
    return this.scaleService.getAll();
  }
}
