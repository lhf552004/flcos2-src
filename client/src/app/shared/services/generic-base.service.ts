import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Base} from '../models/base.model';
import {environment} from '../../../environments/environment';

export abstract class GenericBaseService<T extends Base> {
  private baseUrl = environment.baseUrl;
  protected readonly url: string;
  public readonly objects$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  public readonly object$: BehaviorSubject<T | null> = new BehaviorSubject<T | null>(null);
  protected readonly http: HttpClient;

  protected constructor(http: HttpClient, relativeUrl: string) {
    this.http = http;
    this.url = this.baseUrl + relativeUrl;
  }

  // Get the list of menu items
  getAll(): Observable<T[]> {
    const url = `${this.url}`;
    return this.http.get<T[]>(url).pipe(tap(l => {
      this.objects$.next(l);
    }));
  }

  get(id: string): Observable<T> {
    const url = `${this.url}/${id}`;
    return this.http.get<T>(url).pipe(tap(o => {
      this.object$.next(o);
    }));
  }

  create(newObject: any, defaultParameter: any): Observable<any> {
    const url = `${this.url}`;
    return this.http.post<any>(url, newObject).pipe(tap(x => {
      const objects = this.objects$.getValue();
      objects.push({...newObject, id: x, ...defaultParameter});
      this.objects$.next(objects);
    }));
  }

  update(id: string, updatedObject: T): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.put<any>(url, updatedObject).pipe(tap(x => {
      console.log(updatedObject);
      const objects = this.objects$.getValue();
      const idx = objects.findIndex(l => l.id === id);
      if (idx > -1) {
        objects.splice(idx, 1, updatedObject);
      }
      this.objects$.next(objects);
    }));
  }

  delete(id: string): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete<any>(url).pipe(tap(x => {
      const equipments = this.objects$.getValue();
      const idx = equipments.findIndex(l => l.id === id);
      if (idx > -1) {
        equipments.splice(idx, 1);
      }
      this.objects$.next(equipments);
    }));
  }
}
