import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsComponent } from './products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { ProductDefaultComponent } from './product-default/product-default.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductDefaultComponent],
  imports: [
    ProductsRoutingModule,
    SharedModule,
    NgbDropdownModule
  ]
})
export class ProductsModule { }
