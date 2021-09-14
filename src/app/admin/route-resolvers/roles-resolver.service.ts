import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {RoleService} from '../../core/user/role.service';
import {Role} from '../../core/user/models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RolesResolverService {

  constructor(private roleService: RoleService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Role[]> {
    return this.roleService.getRoles();
  }
}
