import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEllipsisV, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LogisticUnit } from '../shared/models/logistic-unit.model';
import { Warehouse } from '../shared/models/warehouse.model';

@Component({
  selector: 'flcos-logistic-unit',
  templateUrl: './logistic-unit.component.html',
  styleUrls: ['./logistic-unit.component.scss']
})
export class LogisticUnitComponent implements OnInit {
  // Icon
  faEllipsisV: IconDefinition = faEllipsisV;

  logisticUnit: LogisticUnit;

  // Product type
  types: any[] = ['Bag', 'trolly', 'Backet'];
  // Selected type
  selectedType: any;

  // Indicator whether it is a author
  isAuthor: boolean = true;
  // Indicator whether it is a owner
  isOwner: boolean = true;
  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe(data =>{
      if(data.logisticUnit)
        this.logisticUnit = data.logisticUnit;
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
