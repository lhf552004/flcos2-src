import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEllipsisV, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Section } from 'src/app/lines/shared/models/section.model';

@Component({
  selector: 'emes-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  // Icon
  faEllipsisV: IconDefinition = faEllipsisV;

  // Current section
  section: Section;

  // Indicator whether it is a author
  isAuthor: boolean = true;
  // Indicator whether it is a owner
  isOwner: boolean = true;

  // Used for cleaning subscription 
  unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      if (data.section)
        this.section = data.section;
      console.log(this.section)
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  save(close: boolean) {

  }

  close() {

  }

  copy() {

  }

  delete() {

  }

  typeSelected() {

  }

  nameChanged($event) {

  }
}
