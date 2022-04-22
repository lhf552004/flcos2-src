import { Injectable } from '@angular/core';
import {LineService} from '../../lines/shared/line.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Line} from '../../lines/shared/models/line.model';
import {AlarmService} from '../shared/alarm.service';
import {Alarm} from '../../shared/models/alarm-model';

@Injectable({
  providedIn: 'root'
})
export class CurrentAlarmsResolverService {

  constructor(private alarmService: AlarmService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Alarm[]> {
    return this.alarmService.getCurrentAlarms(0, 30);
  }
}
