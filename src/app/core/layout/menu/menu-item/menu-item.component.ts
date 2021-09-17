import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from '../menu-item';

@Component({
  selector: 'emes-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() items: MenuItem[];
  @ViewChild('childMenu') public childMenu;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

}
