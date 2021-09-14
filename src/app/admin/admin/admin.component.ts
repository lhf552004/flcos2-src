import { Component, OnInit } from '@angular/core';
import {IconDefinition, faUsers, faList, faLock, faSitemap, faUserTag, faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'emes-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // Icons
  faUsers: IconDefinition = faUsers;
  faUserTag: IconDefinition = faUserTag;
  faBars: IconDefinition = faBars;
  faSitemap: IconDefinition = faSitemap;
  constructor() { }

  ngOnInit(): void {
  }

}
