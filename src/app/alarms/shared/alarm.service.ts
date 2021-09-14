import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../../core/user/models/user.model';
import {Alarm} from './models/alarm-model';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {

  currentAlarms$: BehaviorSubject<Alarm[]> = new BehaviorSubject<Alarm[]>([]);
  allAlarms$: BehaviorSubject<Alarm[]> = new BehaviorSubject<Alarm[]>([]);

  constructor() {
  }

  getCurrentAlarms(startPage: number, quantity: number): Observable<any> {
    return of();
  }

  getSummaryAlarms(startPage: number, quantity: number): Observable<any> {
    return of();
  }

}
