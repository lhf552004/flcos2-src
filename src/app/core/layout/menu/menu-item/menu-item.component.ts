import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuItem} from '../menu-item';

@Component({
  selector: 'emes-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() isRootNode = false;
  @Input() item: MenuItem;
  children: MenuItem[] = [];
  isLoading = false;
  dataLoaded = false;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    if (this.isRootNode) {
      this.getData();
    }
  }

  getData() {
    if (!this.dataLoaded) {
      this.isLoading = true;
      this.children = this.item.children;
      this.isLoading = false;
      this.dataLoaded = true;
    }
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

  isExpandable(item: MenuItem) {
    return item.children && item.children.length > 0;
  }

}
