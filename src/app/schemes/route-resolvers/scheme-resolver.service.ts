import { Injectable } from '@angular/core';
import {SchemeService} from '../../shared/services/scheme.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Scheme} from '../../shared/models/scheme.model';

@Injectable({
  providedIn: 'root'
})
export class SchemeResolverService {

  constructor(private schemeService: SchemeService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Scheme> {
    const schemeName = route.paramMap.get('schemeName');
    return this.schemeService.getSchemeByName(schemeName);
  }
}
