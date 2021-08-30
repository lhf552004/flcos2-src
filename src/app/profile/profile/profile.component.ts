import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from '../../core/user/authentication.service';
import {User} from '../../core/user/models/user.model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'emes-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  hide = true;
  currentUser: User;
  // Used for cleaning subscription
  private unsubscribe: Subject<void> = new Subject();

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.authenticationService.currentUser.pipe(takeUntil(this.unsubscribe)).subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  save(): void {

  }

  cancel(): void {

  }

}
