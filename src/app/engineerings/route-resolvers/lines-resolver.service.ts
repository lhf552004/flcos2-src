import { Injectable } from '@angular/core';
import {EquipmentService} from '../shared/equipment.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Equipment} from '../shared/models/equipment.model';
import {LineService} from '../shared/line.service';
import {Line} from '../shared/models/line.model';

@Injectable({
  providedIn: 'root'
})
export class LinesResolverService {

  constructor(private lineService: LineService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Line[]> {
    return this.lineService.getAll();
  }
}
