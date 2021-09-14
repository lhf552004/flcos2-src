import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil, tap, take, filter, map} from 'rxjs/operators';
import {faUser, faPowerOff, IconDefinition, faSignInAlt} from '@fortawesome/free-solid-svg-icons';

import {MenuService} from './menu.service';
import {MenuItem} from './menu-item';
import {UserService} from '../../user/user.service';
import {AuthenticatedUser} from '../../user/authenticated-user';
import {SearchService} from '../search/search.service';
import {AuthenticationService} from '../../user/authentication.service';
import {Router, RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'emes-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  // The list of menu items
  public menu: MenuItem[] = [];

  // Indicates if the nav bar is collapsed
  isCollapsed: boolean = true;

  // Indicates whether the user is authenticated
  public isAuthenticated: boolean = true;

  // The authenticated user
  public authenticatedUser: AuthenticatedUser | null = null;

  // Font Awesone icons
  faUser: IconDefinition = faUser;
  faPowerOff: IconDefinition = faPowerOff;
  faSignInAlt: IconDefinition = faSignInAlt;

  // Used for cleaning subscription
  private unsubscribe: Subject<void> = new Subject();

  constructor(private router: Router,
              private menuService: MenuService,
              private userService: AuthenticationService,
              private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.searchService.init();
    this.menuService.getMenusByRoles().pipe(take(1)).subscribe(menu => this.menu = menu);
    this.userService.currentUser.pipe(
      takeUntil(this.unsubscribe),
      tap(authenticatedUser => {
        if (authenticatedUser !== null)
          // Subscribe to the menu service to retrieve the list of menus
        {
          this.menuService.getMenusByRoles().pipe(take(1)).subscribe(menu => this.menu = menu);
        } else {
          this.menu = [];
        }
      }))
      .subscribe(authenticatedUser => {
        this.authenticatedUser = {
          name: authenticatedUser?.firstName + ' ' + authenticatedUser?.lastName
        };
        this.isAuthenticated = authenticatedUser !== null;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  triggerSearch(searchText: string): void {
    this.searchService.search(searchText);
  }

  openPreferences(): void {
    this.router.navigate(['/profile']);
  }

  logout(): void {
    this.userService.logout();
  }

  login(): void {
    this.router.navigate(['/login']);
  }
}
