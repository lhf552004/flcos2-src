import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { faCog, faChevronLeft, faChevronRight, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from './models/menu-items.model';

@Component({
  selector: 'emes-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

 // Icons
 faCog: IconDefinition = faCog;
 faChevronLeft: IconDefinition = faChevronLeft;
 faChevronRight: IconDefinition = faChevronRight;

 // The list of menu items
 @Input() menuItems: MenuItem[];

 // The header text
 @Input() header: string;

 // The expand/collapse status
 @HostBinding('class.collapsed') collapsed: boolean = false;

 constructor() { }

 ngOnInit(): void {
 }

 activateMenuItem(menuItem: any) {
   this.menuItems.forEach(x => x.active = false);
   menuItem.active = true;
 }

 toggleSideBar() {
   this.collapsed = !this.collapsed;
 }

}
