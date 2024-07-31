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
      this.sortMenu(m);
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
      // Update the granted menus
      const grantedMenus = this.grantedMenus$.getValue();
      grantedMenus.push({children: [], iconName: '', ...newMenu, id: x});
      this.sortMenu(grantedMenus);
      this.grantedMenus$.next(grantedMenus);
      // Update the menu list
      const allMenus = this.allMenus$.getValue();
      allMenus.push({children: [], iconName: '', ...newMenu, id: x});
      this.sortMenu(allMenus);
      this.allMenus$.next(allMenus);
    }));
  }

  update(id: string, updatedMenu: MenuItem): Observable<any> {
    const url = `${this.menuUrl}/${id}`;
    return this.http.put<any>(url, updatedMenu).pipe(tap(x => {
      console.log(updatedMenu);
      const grantedMenus = this.grantedMenus$.getValue();
      this.doUpdateMenu(id, updatedMenu, grantedMenus);
      console.log(grantedMenus);
      this.sortMenu(grantedMenus);
      this.grantedMenus$.next(grantedMenus);

      const allMenus = this.allMenus$.getValue();
      this.doUpdateMenu(id, updatedMenu, allMenus);
      console.log(grantedMenus);
      this.allMenus$.next(allMenus);
    }));
  }

  doUpdateMenu(id: string, updated: MenuItem, menuItems: MenuItem[]) {
    let isFound = false;
    let i = 0;
    const length = menuItems.length;
    while (i < length) {
      const curMenuItem = menuItems[i];
      if (curMenuItem.id === id) {
        menuItems.splice(i, 1, updated);
        isFound = true;
        break;
      }else {
        isFound = this.doUpdateMenu(id, updated, curMenuItem.children);
        if (isFound) {
          break;
        }
      }
      i ++;
    }
    return isFound;
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
      const grantedMenus = this.grantedMenus$.getValue();
      this.doDeleteMenu(id, grantedMenus);
      this.grantedMenus$.next(grantedMenus);

      const allMenus = this.allMenus$.getValue();
      this.doDeleteMenu(id, allMenus);
      this.allMenus$.next(allMenus);
    }));
  }

  doDeleteMenu(id: string, menuItems: MenuItem[]) {
    let isFound = false;
    let i = 0;
    const length = menuItems.length;
    while (i < length) {
      const curMenuItem = menuItems[i];
      if (curMenuItem.id === id) {
        menuItems.splice(i, 1);
        isFound = true;
        break;
      }else {
        isFound = this.doDeleteMenu(id, curMenuItem.children);
        if (isFound) {
          break;
        }
      }
      i ++;
    }
    return isFound;
  }
}
