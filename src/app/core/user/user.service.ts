import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {AuthenticatedUser} from './authenticated-user';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {User} from './models/user.model';
import {tap} from 'rxjs/operators';
import {AuthenticationUser} from './models/authentication-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Behaviour subject authenticatedUser
  private userUrl = environment.baseUrl + 'api/v1/users';
  users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  getUser(id: string): Observable<any> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<any>(url);
  }

  getUsers(): Observable<User[]> {
    const url = `${this.userUrl}`;
    return this.http.get<any>(url).pipe(tap(u => {
      this.users$.next(u);
    }));
  }

  createUser(newUser: { userName: string, firstName: string, lastName: string, password: string }) {
    const url = this.userUrl;
    return this.http.post<any>(url, newUser)
      .pipe(tap(x => {
        const users = this.users$.getValue();
        users.push({...newUser, id: x, roles: [], enabled: true});
        this.users$.next(users);
      }));
  }

  updateUser(id: string, updatedUser: User, updateNeeded: boolean): Observable<any> {
    const url = `${this.userUrl}/${id}`;
    return this.http.put<any>(url, updatedUser)
      .pipe(tap(x => {
        if (updateNeeded) {
          this.authenticationService.currentUserValue.lastName = updatedUser.lastName;
          this.authenticationService.currentUserValue.firstName = updatedUser.firstName;
          this.authenticationService.updateUser(this.authenticationService.currentUserValue);
        }
      }));
  }

  deleteUser() {

  }
}
