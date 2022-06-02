import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {SimpleBase} from '../../shared/models/simple-base.model';
import {LinesService} from '../shared/lines.service';

@Injectable({
  providedIn: 'root'
})
export class LinesResolverService {

  constructor(private linesService: LinesService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SimpleBase[]> {
    return this.linesService.getSimpleAll();
  }
}
