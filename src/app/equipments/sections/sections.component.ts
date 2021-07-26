import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from 'src/app/shared/side-bar/models/menu-items.model';
import { Equipment } from '../shared/models/equipment.model';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import { Section } from 'src/app/lines/shared/models/section.model';

@Component({
  selector: 'emes-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  sections: Section[];

  // Used for cleaning subscription 
  unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe((data: {sections: Section[]}) =>{
      this.sections = data.sections;
      console.log(this.sections)
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
