import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Equipment} from './models/equipment.model';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {GcObject} from './models/gc-object.model';

export class EquipmentService<T extends GcObject> {
  private readonly url: string;
  public readonly equipments$: BehaviorSubject<T[]>;
  private readonly http: HttpClient;

  constructor(http: HttpClient, url: string, equipments$: BehaviorSubject<T[]>) {
    this.http = http;
    this.url = url;
    this.equipments$ = equipments$;
  }

  // Get the list of menu items
  getAll(): Observable<T[]> {
    const url = `${this.url}`;
    return this.http.get<T[]>(url).pipe(tap(l => {
      this.equipments$.next(l);
    }));
  }

  get(id: string): Observable<T> {
    const url = `${this.url}/${id}`;
    return this.http.get<T>(url);
  }

  create(newEquipment: any, defaultParameter: any): Observable<any> {
    const url = `${this.url}`;
    return this.http.post<any>(url, newEquipment).pipe(tap(x => {
      const equipments = this.equipments$.getValue();
      equipments.push({...newEquipment, id: x, ...defaultParameter});
      this.equipments$.next(equipments);
    }));
  }

  update(id: string, updatedEquipment: T): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.put<any>(url, updatedEquipment).pipe(tap(x => {
      console.log(updatedEquipment);
      const equipments = this.equipments$.getValue();
      const idx = equipments.findIndex(l => l.id === id);
      if (idx > -1) {
        equipments.splice(idx, 1, updatedEquipment);
      }
      this.equipments$.next(equipments);
    }));
  }

  delete(id: string): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete<any>(url).pipe(tap(x => {
      const equipments = this.equipments$.getValue();
      const idx = equipments.findIndex(l => l.id === id);
      if (idx > -1) {
        equipments.splice(idx, 1);
      }
      this.equipments$.next(equipments);
    }));
  }
}
