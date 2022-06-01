import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Line } from '../shared/models/line.model';

@Component({
  selector: 'flcos-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit, OnDestroy {
  // Icons
  faSearch: IconDefinition = faSearch;

  // The list of lines
  lines: Line[];

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  // Holds filter text
  filterSubject$: Subject<string> = new Subject<string>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe((data: {lines: Line[]}) =>{
      this.lines = data.lines;
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


}
