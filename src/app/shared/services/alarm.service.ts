import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Alarm} from '../models/alarm-model';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {
  private alarmUrl = environment.baseUrl + 'api/v1/alarms';  // URL to web api
  lastAlarms$: BehaviorSubject<Alarm[]> = new BehaviorSubject<Alarm[]>([]);

  constructor(private http: HttpClient) {
  }

  getLastAlarms(): Observable<any> {
    const url = `${this.alarmUrl}/last`;
    return this.http.get<any>(url).pipe(tap(a => {
      this.lastAlarms$.next(a);
    }));
  }

}
