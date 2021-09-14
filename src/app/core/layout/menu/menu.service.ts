import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {MenuItem} from './menu-item';
import {environment} from '../../../../environments/environment';
import {tap} from 'rxjs/operators';
import {Role} from '../../user/models/role.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuUrl = environment.baseUrl + 'api/v1/menus';  // URL to web api
  menus$: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>([]);

  constructor(private http: HttpClient) {
  }

  // Get the list of menu items
  getMenus(): Observable<MenuItem[]> {
    const url = `${this.menuUrl}`;
    return this.http.get<any>(url).pipe(tap(m => {
      this.menus$.next(m);
    }));
    // var mockedMenus: MenuItem[] = [
    //   {id: 1, name: 'Dashboard', url: 'dashboard'},
    //   {id: 1, name: 'Warehouses', url: 'warehouses'},
    //   {id: 2, name: 'Products', url: 'products'},
    //   {id: 3, name: 'Lines', url: 'lines'},
    //   {id: 4, name: 'Orders', url: 'orders'},
    //   {id: 4, name: 'Bins', url: 'bins'},
    //   // {id: 5, name: 'Workflows', url: 'workflow' },
    //   {id: 6, name: 'Process', url: 'equipments'},
    //   {id: 7, name: 'Admin', url: 'admin'}
    // ];
    //
    // return of(mockedMenus);

    // return this.http.get<MenuItem[]>(this.menuUrl);
  }

  // Get the list of menu items by roles
  getMenusByRoles(): Observable<MenuItem[]> {
    const url = `${this.menuUrl}/by-role`;
    return this.http.get<any>(url).pipe(tap((menuItems: MenuItem[]) => {
      const index = menuItems.findIndex(m => m.name === 'Admin');
      let adminMenu = null;
      if (index > -1) {
        adminMenu = menuItems.splice(index, 1);
      }
      menuItems.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      if (adminMenu && adminMenu.length > 0) {
        menuItems.push(...adminMenu);
      }
      this.menus$.next(menuItems);
    }));
  }

  createMenu(newMenu: { name: string, url: string, role: Role }): Observable<any> {
    const url = `${this.menuUrl}`;
    return this.http.post<any>(url, newMenu).pipe(tap(x => {
      const menus = this.menus$.getValue();
      menus.push({...newMenu, id: x});
      this.menus$.next(menus);
    }));
  }

  update(id: string, updatedMenu: { name: string, url: string, role: Role }): Observable<any> {
    const url = `${this.menuUrl}/${id}`;
    return this.http.put<any>(url, updatedMenu).pipe(tap(x => {
      const menus = this.menus$.getValue();
      const menu = menus.find(m => m.id === id);
      if (menu) {
        menu.role = updatedMenu.role;
        menu.name = updatedMenu.name;
        menu.url = updatedMenu.url;
      }
      this.menus$.next(menus);
    }));
  }

  assignRole(id: string, role: Role): Observable<any> {
    const url = `${this.menuUrl}/${id}/assign-role`;
    return this.http.post<any>(url, role).pipe(tap(x => {
      const menus = this.menus$.getValue();
      const menu = menus.find(m => m.id === id);
      if (menu) {
        menu.role = role;
      }
      this.menus$.next(menus);
    }));
  }

  delete(id: string): Observable<any> {
    const url = `${this.menuUrl}/${id}`;
    return this.http.delete<any>(url).pipe(tap(x => {
      const menus = this.menus$.getValue();
      const index = menus.findIndex(m => m.id === id);
      if (index > 0) {
        menus.splice(index, 1);
      }
      this.menus$.next(menus);
    }));
  }
}
