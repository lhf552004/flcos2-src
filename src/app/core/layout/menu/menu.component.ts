import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil, tap, take, filter, map} from 'rxjs/operators';
import {faUser, faPowerOff, IconDefinition, faSignInAlt, faPlug, faHandshakeSlash} from '@fortawesome/free-solid-svg-icons';

import {MenuService} from './menu.service';
import {MenuItem} from './menu-item';
import {UserService} from '../../user/user.service';
import {AuthenticatedUser} from '../../user/authenticated-user';
import {SearchService} from '../search/search.service';
import {AuthenticationService} from '../../user/authentication.service';
import {Router, RouterStateSnapshot} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../../../environments/environment';
import {OpcServerService} from '../../../shared/services/opc-server.service';

@Component({
  selector: 'emes-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  // The list of menu items
  public menu: MenuItem[] = [];

  // Indicates if the nav bar is collapsed
  isCollapsed = true;
  sseConnected = false;
  // Indicates whether the user is authenticated
  public isAuthenticated: boolean = true;

  // The authenticated user
  public authenticatedUser: AuthenticatedUser | null = null;
  private sseUrl = environment.baseUrl + 'stream';
  // Preferences
  LOCAL_STORAGE_PREFERENCES = 'PREFERENCES';

  // The selected language
  public selectedLanguage: string;

  // The list of available languages
  public languages: string[] = [];

  // Font Awesone icons
  faUser: IconDefinition = faUser;
  faPowerOff: IconDefinition = faPowerOff;
  faSignInAlt: IconDefinition = faSignInAlt;
  faPlug: IconDefinition = faPlug;
  faHandshakeSlash: IconDefinition = faHandshakeSlash;

  // Used for cleaning subscription
  private unsubscribe: Subject<void> = new Subject();

  constructor(private router: Router,
              private menuService: MenuService,
              private userService: AuthenticationService,
              private searchService: SearchService,
              private translateService: TranslateService,
              private opcServerService: OpcServerService) {
  }

  ngOnInit(): void {
    this.selectedLanguage = this.translateService.currentLang;
    // Retrieve languages from the translateService
    this.languages = this.translateService.getLangs();
    this.connectSSE();
    this.searchService.init();
    this.menuService.grantedMenus$.pipe(takeUntil(this.unsubscribe)).subscribe(menu => this.menu = menu);
    this.userService.currentUser.pipe(
      takeUntil(this.unsubscribe),
      tap(authenticatedUser => {
        if (authenticatedUser !== null)
          // Subscribe to the menu service to retrieve the list of menus
        {
          this.menuService.getMenusByRoles().pipe(take(1)).subscribe();
          this.opcServerService.getOPCVariableNodeValues().pipe(takeUntil(this.unsubscribe)).subscribe();
        } else {
          this.menu = [];
          this.router.navigate(['/login']);
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

  public setLanguage(language: string) {
    this.translateService.use(language).subscribe(x => {
        this.selectedLanguage = this.translateService.currentLang;
        const preferences = {
          language: this.selectedLanguage
        };
        localStorage.setItem(this.LOCAL_STORAGE_PREFERENCES, JSON.stringify(preferences));
      }
    );
  }

  connectSSE(): void {
    const source = new EventSource(this.sseUrl);
    source.onopen = (event) => {
      this.sseConnected = true;
    };
    source.onerror = (error ) => {
      this.sseConnected = false;
    };
    source.addEventListener('message', message => {
      console.log(message.data);
      const changedNode: {nodeId: string, newValue: object} = JSON.parse(message.data);
      this.opcServerService.updateVariableNodeValue(changedNode.nodeId, changedNode.newValue);
    });
  }
}
