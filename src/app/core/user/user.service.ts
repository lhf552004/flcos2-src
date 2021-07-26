import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthenticatedUser } from './authenticated-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Behaviour subject authenticatedUser
  public authenticatedUserSubject$ = new BehaviorSubject<AuthenticatedUser | null>(null);
  constructor() { }
}
