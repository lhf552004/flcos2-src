import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEllipsisV, faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Line } from '../shared/models/line.model';

@Component({
  selector: 'emes-line-details',
  templateUrl: './line-details.component.html',
  styleUrls: ['./line-details.component.scss']
})
export class LineDetailsComponent implements OnInit, OnDestroy {

  // Icon
  faEllipsisV: IconDefinition = faEllipsisV;
    
  line: Line;

  // Indicator whether it is a author
  isAuthor: boolean = true;
  // Indicator whether it is a owner
  isOwner: boolean = true;

  // Used for cleaning subscription 
  unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.data.pipe(takeUntil(this.unsubscribe)).subscribe((data: { line: Line }) => {
      this.line = data.line;
      console.log(this.line)
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

  nameChanged($event) {

  }

}
