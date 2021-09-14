import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {User} from './models/user.model';
import {Role} from './models/role.model';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private roleUrl = environment.baseUrl + 'api/v1/roles';
  roles$: BehaviorSubject<Role[]> = new BehaviorSubject<Role[]>([]);
  constructor(private http: HttpClient) { }

  getRoles(): Observable<any[]> {
    const url = `${this.roleUrl}`;
    return this.http.get<any>(url).pipe(tap(r => {
      this.roles$.next(r);
    }));
  }
}
