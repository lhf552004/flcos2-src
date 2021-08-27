import {Component, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Product} from '../../products/shared/models/product.model';
import {faProductHunt} from '@fortawesome/free-brands-svg-icons';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {MenuItem} from '../../shared/side-bar/models/menu-items.model';
import {Order} from '../shared/models/order.model';

@Component({
  selector: 'emes-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  menuItems: MenuItem[];
  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe((data: { orders: Order[] }) => {
      this.menuItems = data.orders.map(o => ({
        id: o.id,
        icon: faProductHunt,
        label: o.id,
        route: [o.id],
        children: []
      }));
    });
  }

}
