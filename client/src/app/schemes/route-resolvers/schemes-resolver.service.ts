import { Injectable } from '@angular/core';
import {LineService} from '../../lines/shared/line.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Line} from '../../lines/shared/models/line.model';
import {SchemeService} from '../../shared/services/scheme.service';

@Injectable({
  providedIn: 'root'
})
export class SchemesResolverService {

  constructor(private schemeService: SchemeService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
    return this.schemeService.getSchemeNames();
  }
}
