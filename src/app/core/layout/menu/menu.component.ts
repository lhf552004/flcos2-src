import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap, take, filter, map } from 'rxjs/operators';
import { faUser, faPowerOff, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { MenuService } from './menu.service';
import { MenuItem } from './menu-item';
import { UserService } from '../../user/user.service';
import { AuthenticatedUser } from '../../user/authenticated-user';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'emes-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
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

  // Used for cleaning subscription 
  private unsubscribe: Subject<void> = new Subject();

  constructor(private menuService: MenuService, private userService: UserService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.init();
    this.menuService.getMenu().pipe(take(1)).subscribe(menu => this.menu = menu);
    // this.userService.authenticatedUserSubject$.pipe(
    //   takeUntil(this.unsubscribe),
    //   tap(authenticatedUser => {
    //     if (authenticatedUser !== null)
    //       // Subscribe to the menu service to retrieve the list of menus
    //       this.menuService.getMenu().pipe(take(1)).subscribe(menu => this.menu = menu);
    //     else
    //       this.menu = [];
    //   }))
    //   .subscribe(authenticatedUser => {
    //     this.authenticatedUser = authenticatedUser;
    //     this.isAuthenticated = authenticatedUser !== null
    //   });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  triggerSearch(searchText: string): void {
    this.searchService.search(searchText);
  }

  openPreferences(): void {

  }

  logout(): void {
    // this.userService.logout();
  }
}
