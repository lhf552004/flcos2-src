import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { OrderDefaultComponent } from './order-default/order-default.component';
import {SharedModule} from '../shared/shared.module';
import {OrdersRoutingModule} from './orders-routing.module';

@NgModule({
  declarations: [OrdersComponent, OrderComponent, OrderDefaultComponent],
  imports: [
    SharedModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
