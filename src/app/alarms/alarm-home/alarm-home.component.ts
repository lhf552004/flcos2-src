import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../shared/side-bar/model/menu-item.model';
import {faTasks} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'emes-alarm-home',
  templateUrl: './alarm-home.component.html',
  styleUrls: ['./alarm-home.component.scss']
})
export class AlarmHomeComponent implements OnInit {
  menuItems: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {id: '1', label: 'Current Alarms', icon: faTasks, route: ['current-alarms'], children: []},
      {id: '2', label: 'Summary Alarms', icon: faTasks, route: ['summary-alarms'], children: []},
      {id: '3', label: 'Alarms Configuration', icon: faTasks, route: ['alarms-configuration'], children: []}
    ];
  }

}
