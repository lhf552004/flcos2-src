import {Component, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {Order} from '../shared/models/order.model';
import {IconDefinition, faEllipsisV} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'emes-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  order: Order;
  isAuthor = true;
  isOwner = true;
  // Icon
  faEllipsisV: IconDefinition = faEllipsisV;
  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      if (data.order) {
        this.order = data.order;
      }
      console.log(this.order);
    });
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
