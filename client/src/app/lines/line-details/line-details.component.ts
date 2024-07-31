import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {faEllipsisV, faSearch, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Line} from '../shared/models/line.model';
import {Section} from '../shared/models/section.model';

@Component({
  selector: 'flcos-line-details',
  templateUrl: './line-details.component.html',
  styleUrls: ['./line-details.component.scss']
})
export class LineDetailsComponent implements OnInit, OnDestroy {

  // Icon
  faEllipsisV: IconDefinition = faEllipsisV;

  line: Line;
  sections: Section[];
  // Indicator whether it is a author
  isAuthor: boolean = true;
  // Indicator whether it is a owner
  isOwner: boolean = true;

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.parent.data.pipe(takeUntil(this.unsubscribe)).subscribe((data: { line: Line }) => {
      this.line = data.line;
      console.log(this.line);
      this.sections = data.line.sections.map((section, index, array) => {
        return {
          id: section.id,
          name: section.name,
          status: this.getStatus(),
          jobName: this.line.name + ':00000' + (index + 1)
        };
      });
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getStatus(): string {
    const statusNum = Math.floor(Math.random() * 3);
    if (statusNum === 0) {
      return 'Running';
    } else if (statusNum === 1) {
      return 'Suspend';
    } else {
      return 'Error';
    }
  }

  save(close: boolean) {

  }

  close() {

  }

  copy() {

  }

  delete() {

  }

  nameChanged($event) {

  }

}
