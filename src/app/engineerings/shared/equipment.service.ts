import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Equipment} from './models/equipment.model';
import {Section} from './models/section.model';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private equipments = environment.baseUrl + 'api/v1/equipments';  // URL to web api
  allEquipments$: BehaviorSubject<Equipment[]> = new BehaviorSubject<Equipment[]>([]);

  constructor(private http: HttpClient) {
  }

  // Get the list of menu items
  getAll(): Observable<Equipment[]> {
    const url = `${this.equipments}`;
    return this.http.get<any>(url).pipe(tap(l => {
      this.allEquipments$.next(l);
    }));
  }

  get(id: string): Observable<Equipment> {
    const url = `${this.equipments}/${id}`;
    return this.http.get<Equipment>(url);
  }
}
