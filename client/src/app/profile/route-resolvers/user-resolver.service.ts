import { Injectable } from '@angular/core';
import {ProductService} from '../../products/shared/product.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Product} from '../../products/shared/models/product.model';
import {UserService} from '../../core/user/user.service';
import {User} from '../../core/user/models/user.model';
import {AuthenticationService} from '../../core/user/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService {

  constructor(private userService: UserService, private authenticationService: AuthenticationService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const id = this.authenticationService.currentUserValue.id;
    return this.userService.getUser(id as string);
  }
}
