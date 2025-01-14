import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {User} from './models/user.model';
import {environment} from 'src/environments/environment';
import {AuthenticationUser} from './models/authentication-user.model';
import {MenuService} from '../layout/menu/menu.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<AuthenticationUser>;
  public currentUser: Observable<AuthenticationUser>;
  private authenticateUrl = environment.baseUrl + 'authenticate';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<AuthenticationUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): AuthenticationUser {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(this.authenticateUrl, {username, password})
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  updateUser(updatedUser: AuthenticationUser) {
    this.currentUserSubject.next(updatedUser);
  }
}
