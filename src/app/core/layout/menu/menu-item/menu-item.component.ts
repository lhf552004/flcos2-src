import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuItem} from '../menu-item';

@Component({
  selector: 'emes-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() items: MenuItem[];
  @ViewChild('childMenu') public childMenu;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  }

  navigateToExternal(menuItem: MenuItem) {
    this.router.navigate(
      ['external'],
      {
        relativeTo: this.route,
        queryParams: {url: encodeURIComponent(menuItem.externalUrl)},
        queryParamsHandling: 'merge'
      });
  }

}
