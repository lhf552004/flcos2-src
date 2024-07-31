import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEllipsisV, faHome, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { combineLatest, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Bin } from '../shared/models/bin.model';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'flcos-bin',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.scss']
})
export class BinComponent implements OnInit, OnDestroy {

  // Icon
  faEllipsisV: IconDefinition = faEllipsisV;

  // Current bin
  bin: Bin;

  // Product list
  products: Product[];
  // Selected product
  selectedProduct: Product;

  // Type list
  types: string[] = ['bulk', 'bin'];
  // Selected type
  selectedType: string;

  // Indicator whether it is a author
  isAuthor: boolean = true;
  // Indicator whether it is a owner
  isOwner: boolean = true;

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const observables: Observable<any>[] = [];

    observables.push(this.route.parent.data.pipe(takeUntil(this.unsubscribe)));
    observables.push(this.route.data.pipe(takeUntil(this.unsubscribe)));

    combineLatest(observables).subscribe(x => {
      this.products = x[0].products;
      this.bin = x[1].bin;
      console.log(x)
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

  productSelected() {

  }

}
