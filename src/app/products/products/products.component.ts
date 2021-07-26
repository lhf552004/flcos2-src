import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MenuItem } from 'src/app/shared/side-bar/models/menu-items.model';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'emes-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  menuItems: MenuItem[];
  
  // Used for cleaning subscription 
  unsubscribe: Subject<void> = new Subject();
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe((data: {products: Product[]}) =>{
      this.menuItems = data.products.map(p => ({
        id: p.id,
        icon: faProductHunt,
        label: p.name,
        route: [p.id],
        children: []
      }));
    });
    
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
