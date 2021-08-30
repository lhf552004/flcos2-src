import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {AuthenticationService} from '../../core/user/authentication.service';
import {User} from '../../core/user/models/user.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = environment.baseUrl + 'api/v1/users';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  updateUser(updatedUser: User): Observable<any> {
    return this.http.put<any>(this.userUrl, updatedUser)
      .pipe(tap(x => {
          this.authenticationService.updateUser(updatedUser);
      }));
  }
}
