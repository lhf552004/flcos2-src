import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {MenuItem} from './menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuUrl = 'api/menu-items';  // URL to web api

  constructor(private http: HttpClient) {
  }

  // Get the list of menu items
  getMenu(): Observable<MenuItem[]> {
    var mockedMenus: MenuItem[] = [
      {id: 1, name: 'Dashboard', url: 'dashboard'},
      {id: 1, name: 'Warehouses', url: 'warehouses'},
      {id: 2, name: 'Products', url: 'products'},
      {id: 3, name: 'Lines', url: 'lines'},
      {id: 4, name: 'Orders', url: 'orders'},
      {id: 4, name: 'Bins', url: 'bins'},
      // {id: 5, name: 'Workflows', url: 'workflow' },
      {id: 6, name: 'Process', url: 'equipments'},
      {id: 7, name: 'Admin', url: 'admin'}
    ];

    return of(mockedMenus);

    // return this.http.get<MenuItem[]>(this.menuUrl);
  }
}
