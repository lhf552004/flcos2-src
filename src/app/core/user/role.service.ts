import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {User} from './models/user.model';
import {Role} from './models/role.model';
import {tap} from 'rxjs/operators';
import {MenuItem} from '../layout/menu/menu-item';


@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private roleUrl = environment.baseUrl + 'api/v1/roles';
  roles$: BehaviorSubject<Role[]> = new BehaviorSubject<Role[]>([]);

  constructor(private http: HttpClient) {
  }

  getRoles(): Observable<any[]> {
    const url = `${this.roleUrl}`;
    return this.http.get<any>(url).pipe(tap(r => {
      this.roles$.next(r);
    }));
  }

  create(name: string): Observable<any[]> {
    const url = `${this.roleUrl}`;
    const payload = {name};
    return this.http.post<any>(url, payload).pipe(tap(x => {
      const roles = this.roles$.getValue();
      roles.push({id: x, name});
      this.roles$.next(roles);
    }));
  }

  rename(id: string, newName: string): Observable<any> {
    const url = `${this.roleUrl}/${id}/add-menus`;
    const payload = {name: newName};
    return this.http.put<any>(url, payload).pipe(tap(x => {
      const roles = this.roles$.getValue();
      const theRole = roles.find(r => r.id === id);
      if (theRole) {
        theRole.name = newName;
      }
      this.roles$.next(roles);
    }));
  }

  // addMenus(id: string, menus: MenuItem[]): Observable<any> {
  //   const url = `${this.roleUrl}/${id}/add-menus`;
  //   const payload = {menus};
  //   return this.http.post<any>(url, payload).pipe(tap(x => {
  //     const roles = this.roles$.getValue();
  //     const theRole = roles.find(r => r.id === id);
  //     if (theRole) {
  //       theRole.menus.push(menus);
  //     }
  //     this.roles$.next(roles);
  //   }));
  // }
  //
  // removeMenus(id: string, menus: MenuItem[]): Observable<any> {
  //   const url = `${this.roleUrl}/${id}/remove-menus`;
  //   const payload = {menus};
  //   return this.http.post<any>(url, payload).pipe(tap(x => {
  //     const roles = this.roles$.getValue();
  //     const theRole = roles.find(r => r.id === id);
  //     if (theRole) {
  //       menus.map(m => theRole.menus.findIndex(y => y.id === m.id)).forEach(idx => {
  //         theRole.menus.splice(idx, 1);
  //       });
  //     }
  //     this.roles$.next(roles);
  //   }));
  // }

  delete(id: string): Observable<any> {
    const url = `${this.roleUrl}/${id}`;
    return this.http.delete<any>(url).pipe(tap(x => {
      const roles = this.roles$.getValue();
      const idx = roles.findIndex(r => r.id === id);
      if (idx > -1) {
        roles.splice(idx, 1);
      }
      this.roles$.next(roles);
    }));
  }
}
