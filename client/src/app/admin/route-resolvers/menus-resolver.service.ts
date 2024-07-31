import { Injectable } from '@angular/core';
import {RoleService} from '../../core/user/role.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Role} from '../../core/user/models/role.model';
import {MenuService} from '../../core/layout/menu/menu.service';
import {MenuItem} from '../../core/layout/menu/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenusResolverService {

  constructor(private menuService: MenuService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MenuItem[]> {
    return this.menuService.getMenus();
  }
}
