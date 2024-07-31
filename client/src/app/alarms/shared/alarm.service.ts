import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Alarm} from '../../shared/models/alarm-model';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {
  private alarmUrl = environment.baseUrl + 'api/v1/alarms';  // URL to web api
  currentAlarms$: BehaviorSubject<Alarm[]> = new BehaviorSubject<Alarm[]>([]);
  allAlarms$: BehaviorSubject<Alarm[]> = new BehaviorSubject<Alarm[]>([]);

  constructor(private http: HttpClient) {
  }


  getAllAlarms(startPage: number, quantity: number): Observable<any> {
    const url = `${this.alarmUrl}?page=${startPage}&size=${quantity}`;
    return this.http.get<any>(url).pipe(tap(a => {
      this.allAlarms$.next(a);
    }));
  }

  getCurrentAlarms(startPage: number, quantity: number): Observable<any> {
    const url = `${this.alarmUrl}/active?page=${startPage}&size=${quantity}`;
    return this.http.get<any>(url).pipe(tap(a => {
      this.currentAlarms$.next(a);
    }));
  }

  getSummaryAlarms(startPage: number, quantity: number): Observable<any> {
    return of();
  }

}
