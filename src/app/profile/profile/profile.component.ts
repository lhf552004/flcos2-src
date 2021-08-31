import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AuthenticationService} from '../../core/user/authentication.service';
import {User} from '../../core/user/models/user.model';
import {UserService} from '../../core/user/user.service';
import {NotificatorService} from '../../core/notificator/notificator.service';
import {Notification} from '../../core/notificator/notification.model';
import {Job} from '../../lines/jobs/shared/models/job.model';

@Component({
  selector: 'emes-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  hide = true;
  currentUser: User;
  lastName: string;
  firstName: string;
  isInfoEdited = false;
  isPasswordChanged = false;
  minPw = 5;
  formGroup: FormGroup;
  passwordText: string;
  firstNameText: string;
  lastNameText: string;
  // Used for cleaning subscription
  private unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder,
              private notificatorService: NotificatorService) {
  }

  ngOnInit(): void {
    const passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
      if (formGroup.get('password').value === formGroup.get('password2').value) {
        return null;
      } else {
        return {passwordMismatch: true};
      }
    };
    this.formGroup = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(this.minPw)]],
      password2: ['', [Validators.required]]
    }, {validator: passwordMatchValidator});

    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe((data: { user: User }) => {
      if (data.user != null) {
        this.currentUser = data.user;
      }
    });

    this.authenticationService.currentUser.pipe(takeUntil(this.unsubscribe)).subscribe(user => {
      if (user == null) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  save(): void {
    this.currentUser.password = '';
    this.userService.updateUser(this.currentUser.id, this.currentUser, true).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.notificatorService.sendNotification(new Notification('Update profile successfully!', 'info'));
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

  changePassword(): void {
    this.userService.updateUser(this.currentUser.id, this.currentUser, false).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.notificatorService.sendNotification(new Notification('Change password successfully!', 'info'));
    });
  }

  infoChanged(): void {
    if (this.currentUser.lastName === '' || this.currentUser.firstName === '') {
      this.isInfoEdited = false;
    } else {
      this.isInfoEdited = true;
    }
  }

  get password() {
    return this.formGroup.get('password');
  }

  get password2() {
    return this.formGroup.get('password2');
  }

  /* Called on each input in either password field */
  onPasswordInput(): void {
    if (this.formGroup.hasError('passwordMismatch')) {
      this.password2.setErrors([{passwordMismatch: true}]);
      this.isPasswordChanged = false;
    } else {
      this.password2.setErrors(null);
      this.isPasswordChanged = true;
    }
  }

}
