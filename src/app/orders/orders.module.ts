import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { OrderDefaultComponent } from './order-default/order-default.component';
import {SharedModule} from '../shared/shared.module';
import {OrdersRoutingModule} from './orders-routing.module';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderViewerComponent } from './order-viewer/order-viewer.component';

@NgModule({
  declarations: [OrdersComponent, OrderComponent, OrderDefaultComponent, CreateOrderComponent, OrderViewerComponent],
  imports: [
    SharedModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
