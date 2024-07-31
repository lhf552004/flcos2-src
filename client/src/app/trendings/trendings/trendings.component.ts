import { Component, OnInit } from '@angular/core';
import {IconDefinition, faUsers, faUserTag, faBars, faSitemap} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'flcos-trendings',
  templateUrl: './trendings.component.html',
  styleUrls: ['./trendings.component.scss']
})
export class TrendingsComponent implements OnInit {
  faUsers: IconDefinition = faUsers;
  faUserTag: IconDefinition = faUserTag;
  faBars: IconDefinition = faBars;
  faSitemap: IconDefinition = faSitemap;
  constructor() { }

  ngOnInit(): void {
  }

}
