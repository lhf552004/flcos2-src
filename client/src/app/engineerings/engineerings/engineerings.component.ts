import { Component, OnInit } from '@angular/core';
import {IconDefinition, faUsers, faUserTag, faBars, faSitemap} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'flcos-engineerings',
  templateUrl: './engineerings.component.html',
  styleUrls: ['./engineerings.component.scss']
})
export class EngineeringsComponent implements OnInit {
// Icons
  faUsers: IconDefinition = faUsers;
  faUserTag: IconDefinition = faUserTag;
  faBars: IconDefinition = faBars;
  faSitemap: IconDefinition = faSitemap;
  constructor() { }

  ngOnInit(): void {
  }

}
