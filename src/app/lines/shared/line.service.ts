import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { Line } from './models/line.model';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LineService {

  private lineUrl = environment.baseUrl + 'api/v1/lines';  // URL to web api
  allLines$: BehaviorSubject<Line[]> = new BehaviorSubject<Line[]>([]);

  constructor(private http: HttpClient) {
  }

  // Get the list of menu items
  getAll(): Observable<Line[]> {
    const url = `${this.lineUrl}`;
    return this.http.get<any>(url).pipe(tap(l => {
      this.allLines$.next(l);
    }));
  }

  get(id: string): Observable<Line> {
    const url = `${this.lineUrl}/${id}`;
    return this.http.get<Line>(url);
  }
}
