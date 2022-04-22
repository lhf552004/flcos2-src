import { Injectable } from '@angular/core';
import {DischargerService} from '../shared/discharger.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Discharger} from '../shared/models/discharger.model';
import {FillerService} from '../shared/filler.service';
import {Filler} from '../shared/models/filler.model';

@Injectable({
  providedIn: 'root'
})
export class FillersResolverService {

  constructor(private fillerService: FillerService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Filler[]> {
    return this.fillerService.getAll();
  }
}
