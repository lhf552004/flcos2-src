import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Line } from '../shared/models/line.model';

@Component({
  selector: 'emes-line-default',
  templateUrl: './line-default.component.html',
  styleUrls: ['./line-default.component.scss']
})
export class LineDefaultComponent implements OnInit, OnDestroy {
  
  // Current line
  line: Line;
  
  // Svg file path
  svg: string;

  // Used for cleaning subscription 
  unsubscribe: Subject<void> = new Subject();
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe((data: {line: Line}) =>{
      this.line = data.line;
      this.svg = 'assets/svgs/' + this.line.name + '.svg';
      console.log(this.line)
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
