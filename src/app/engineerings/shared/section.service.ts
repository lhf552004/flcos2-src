import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {Line} from './models/line.model';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Section} from './models/section.model';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private sectionUrl = environment.baseUrl + 'api/v1/sections';  // URL to web api
  allSections$: BehaviorSubject<Section[]> = new BehaviorSubject<Section[]>([]);

  constructor(private http: HttpClient) {
  }

  // Get the list of menu items
  getAll(): Observable<Section[]> {
    const url = `${this.sectionUrl}`;
    return this.http.get<any>(url).pipe(tap(l => {
      this.allSections$.next(l);
    }));
  }

  get(id: string): Observable<Section> {
    const url = `${this.sectionUrl}/${id}`;
    return this.http.get<Section>(url);
  }
}
