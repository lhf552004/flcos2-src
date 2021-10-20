import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {MenuItem} from './menu-item';
import {environment} from '../../../../environments/environment';
import {tap} from 'rxjs/operators';
import {Role} from '../../user/models/role.model';
import {NewMenuItem} from './new-menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuUrl = environment.baseUrl + 'api/v1/menus';  // URL to web api
  grantedMenus$: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>([]);
  allMenus$: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>([]);

  constructor(private http: HttpClient) {
  }

  // Get the list of menu items
  getMenus(): Observable<MenuItem[]> {
    const url = `${this.menuUrl}`;
    return this.http.get<any>(url).pipe(tap(m => {
      this.allMenus$.next(m);
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
      this.sortMenu(menuItems);
      this.grantedMenus$.next(menuItems);
    }));
  }

  sorter = (a, b) => {
    return a.index - b.index;
  }

  sortMenu(menuItems: MenuItem[]) {
    menuItems.sort(this.sorter);
    menuItems.forEach(m => this.sortMenu(m.children));
  }

  createMenu(newMenu: NewMenuItem): Observable<any> {
    const url = `${this.menuUrl}`;
    return this.http.post<any>(url, newMenu).pipe(tap(x => {
      // Update the menus
      const menus = this.grantedMenus$.getValue();
      menus.push({children: [], iconName: '', ...newMenu, id: x});
      this.grantedMenus$.next(menus);
      // Update the menu list
      const allMenus = this.allMenus$.getValue();
      allMenus.push({children: [], iconName: '', ...newMenu, id: x});
      this.allMenus$.next(allMenus);
    }));
  }

  update(id: string, updatedMenu: MenuItem): Observable<any> {
    const url = `${this.menuUrl}/${id}`;
    return this.http.put<any>(url, updatedMenu).pipe(tap(x => {
      const grantedMenus = this.grantedMenus$.getValue();
      let menu = grantedMenus.find(m => m.id === id);
      if (menu) {
        menu = {...updatedMenu};
      }
      this.grantedMenus$.next(grantedMenus);

      const allMenus = this.allMenus$.getValue();
      let menu2 = allMenus.find(m => m.id === id);
      if (menu2) {
        menu2 = {...updatedMenu};
      }
      this.allMenus$.next(allMenus);
    }));
  }

  assignRole(id: string, role: Role): Observable<any> {
    const url = `${this.menuUrl}/${id}/assign-role`;
    return this.http.post<any>(url, role).pipe(tap(x => {
      const menus = this.grantedMenus$.getValue();
      const menu = menus.find(m => m.id === id);
      if (menu) {
        menu.role = role;
      }
      this.grantedMenus$.next(menus);
    }));
  }

  delete(id: string): Observable<any> {
    const url = `${this.menuUrl}/${id}`;
    return this.http.delete<any>(url).pipe(tap(x => {
      const menus = this.grantedMenus$.getValue();
      const index = menus.findIndex(m => m.id === id);
      if (index > 0) {
        menus.splice(index, 1);
      }
      this.grantedMenus$.next(menus);

      const allMenus = this.allMenus$.getValue();
      const index2 = allMenus.findIndex(m => m.id === id);
      if (index2 > 0) {
        allMenus.splice(index2, 1);
      }
      this.allMenus$.next(allMenus);
    }));
  }
}
