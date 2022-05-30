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

  create(newEquipment: any, defaultParameter: any): Observable<any> {
    const url = `${this.url}`;
    return this.http.post<any>(url, newEquipment).pipe(tap(x => {
      const equipments = this.objects$.getValue();
      equipments.push({...newEquipment, id: x, ...defaultParameter});
      this.objects$.next(equipments);
    }));
  }

  update(id: string, updatedEquipment: T): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.put<any>(url, updatedEquipment).pipe(tap(x => {
      console.log(updatedEquipment);
      const equipments = this.objects$.getValue();
      const idx = equipments.findIndex(l => l.id === id);
      if (idx > -1) {
        equipments.splice(idx, 1, updatedEquipment);
      }
      this.objects$.next(equipments);
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
