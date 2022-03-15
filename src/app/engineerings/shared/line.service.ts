import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Line} from './models/line.model';
import {MenuItem} from '../../core/layout/menu/menu-item';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {NewMenuItem} from '../../core/layout/menu/new-menu-item';

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

  create(newLine: { name: string }): Observable<any> {
    const url = `${this.lineUrl}`;
    return this.http.post<any>(url, newLine).pipe(tap(x => {
      const lines = this.allLines$.getValue();
      lines.push({...newLine, id: x, status: 'PASSIVE', isProduction: false, sections: []});
      this.allLines$.next(lines);
    }));
  }

  update(id: string, updatedLine: Line): Observable<any> {
    const url = `${this.lineUrl}/${id}`;
    return this.http.put<any>(url, updatedLine).pipe(tap(x => {
      console.log(updatedLine);
      const lines = this.allLines$.getValue();
      const idx = lines.findIndex(l => l.id === id);
      if (idx > -1) {
        lines.splice(idx, 1, updatedLine);
      }
      this.allLines$.next(lines);
    }));
  }

  delete(id: string): Observable<any> {
    const url = `${this.lineUrl}/${id}`;
    return this.http.delete<any>(url).pipe(tap(x => {
      const lines = this.allLines$.getValue();
      const idx = lines.findIndex(l => l.id === id);
      if (idx > -1) {
        lines.splice(idx, 1);
      }
      this.allLines$.next(lines);
    }));
  }
}
