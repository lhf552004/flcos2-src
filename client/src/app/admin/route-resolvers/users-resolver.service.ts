import { Injectable } from '@angular/core';
import {BinService} from '../../bins/shared/bin.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Bin} from '../../bins/shared/models/bin.model';
import {UserService} from '../../core/user/user.service';
import {User} from '../../core/user/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService {

  constructor(private userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this.userService.getUsers();
  }
}
