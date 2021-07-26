import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEllipsisV, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LogisticUnit } from '../shared/models/logistic-unit.model';
import { Warehouse } from '../shared/models/warehouse.model';

@Component({
  selector: 'emes-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  // Icon
  faEllipsisV: IconDefinition = faEllipsisV;
  
  // Current warehouse
  warehouse: Warehouse;
  // Logistic units in the warehouse
  logisticUnits: LogisticUnit[];

  // Indicator whether it is a author
  isAuthor: boolean = true;
  // Indicator whether it is a owner
  isOwner: boolean = true;

  // Used for cleaning subscription 
  unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe(data =>{
      if(data.warehouse)
        this.warehouse = data.warehouse;
      console.log(this.warehouse)
      if(data.logisticUnits){
        this.logisticUnits = data.logisticUnits;
      }
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
