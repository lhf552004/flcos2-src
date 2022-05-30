import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {faEllipsisV, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Product} from '../shared/models/product.model';

@Component({
  selector: 'emes-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  // Icon
  faEllipsisV: IconDefinition = faEllipsisV;

  // Current product
  product: Product;

  // Product type
  types: any[] = ['Raw', 'Finished Product', 'Semi-Product'];
  // Selected type
  selectedType: any;

  // Indicator whether it is a author
  isAuthor = true;
  // Indicator whether it is a owner
  isOwner = true;

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      if (data.product) {
        this.product = data.product;
      }
      console.log(this.product);
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
