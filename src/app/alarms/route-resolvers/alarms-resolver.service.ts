import { Injectable } from '@angular/core';
import {AlarmService} from '../shared/alarm.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Alarm} from '../../shared/models/alarm-model';

@Injectable({
  providedIn: 'root'
})
export class AlarmsResolverService {

  constructor(private alarmService: AlarmService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Alarm[]> {
    return this.alarmService.getAllAlarms(0, 30);
  }
}
