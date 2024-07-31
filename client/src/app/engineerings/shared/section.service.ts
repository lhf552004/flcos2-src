import {Injectable} from '@angular/core';
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

  create(newSection: { index: number, name: string, line: { id: string, name: string } }): Observable<any> {
    const url = `${this.sectionUrl}`;
    return this.http.post<any>(url, newSection).pipe(tap(x => {
      const sections = this.allSections$.getValue();
      sections.push({...newSection, id: x, status: 'PASSIVE', isHold: false, isManual: false, job: null, equipments: []});
      this.allSections$.next(sections);
    }));
  }

  update(id: string, updatedSection: Section): Observable<any> {
    const url = `${this.sectionUrl}/${id}`;
    return this.http.put<any>(url, updatedSection).pipe(tap(x => {
      console.log(updatedSection);
      const sections = this.allSections$.getValue();
      const idx = sections.findIndex(l => l.id === id);
      if (idx > -1) {
        sections.splice(idx, 1, updatedSection);
      }
      this.allSections$.next(sections);
    }));
  }

  delete(id: string): Observable<any> {
    const url = `${this.sectionUrl}/${id}`;
    return this.http.delete<any>(url).pipe(tap(x => {
      const lines = this.allSections$.getValue();
      const idx = lines.findIndex(l => l.id === id);
      if (idx > -1) {
        lines.splice(idx, 1);
      }
      this.allSections$.next(lines);
    }));
  }
}
