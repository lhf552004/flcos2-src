import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from '../../shared/side-bar/models/menu-items.model';
import {Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Bin} from '../../bins/shared/models/bin.model';
import {faCog, faHome, faPlus} from '@fortawesome/free-solid-svg-icons';
import {SchemeService} from '../../shared/services/scheme.service';

@Component({
  selector: 'emes-schemes',
  templateUrl: './schemes.component.html',
  styleUrls: ['./schemes.component.scss']
})
export class SchemesComponent implements OnInit, OnDestroy {

  menuItems: MenuItem[];

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();
  private showNewPage: any;
  private showSettings: any;

  constructor(private route: ActivatedRoute, private schemeService: SchemeService) { }

  ngOnInit(): void {
    this.schemeService.schemeNames$.pipe(takeUntil(this.unsubscribe)).subscribe((schemeNames: string[]) => {
      this.menuItems = schemeNames.map(p => ({
        id: p,
        icon: faHome,
        label: p,
        route: [p],
        children: []
      }));

      // Add new page as sticky bottom menu item
      // if (this.showNewPage) {
      //   const newPageMenuItem: MenuItem = { id: 'newPageMenuItemId', label: 'New Page', icon: faPlus, stickyBottom: true, onClick: () => this.showCreateNewDocument('', '') };
      //   this.menuItems.push(newPageMenuItem);
      // }
      //
      // // Add settings as sticky bottom menu item
      // if (this.showSettings) {
      //   const settingMenuItem: MenuItem = { id: 'settingsMenuItemId', label: 'Settings', icon: faCog, stickyBottom: true, route: ['settings'], collpaseOnClick: true };
      //   this.menuItems.push(settingMenuItem);
      // }
    });

  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  createScheme() {

  }

}
