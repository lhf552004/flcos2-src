import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from 'src/app/shared/side-bar/models/menu-items.model';

@Component({
  selector: 'emes-equipment-home',
  templateUrl: './equipment-home.component.html',
  styleUrls: ['./equipment-home.component.scss']
})
export class EquipmentHomeComponent implements OnInit {
  // Menu items
  menuItems: MenuItem[];

  // Used for cleaning subscription 
  unsubscribe: Subject<void> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {id: '1', label: 'Sections', icon: faTasks, route: ['sections'], children: []},
      {id: '2', label: 'Equipments', icon: faTasks, route: ['equipments'], children: []}
    ];
  }
}
