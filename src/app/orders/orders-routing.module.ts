import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrdersComponent} from './orders/orders.component';
import {OrdersResolverService} from './route-resolvers/orders-resolver.service';
import {OrderResolverService} from './route-resolvers/order-resolver.service';
import {OrderComponent} from './order/order.component';
import {OrderDefaultComponent} from './order-default/order-default.component';

const routes: Routes = [
  {
    path: '', component: OrdersComponent, resolve: {orders: OrdersResolverService}, children: [
      {path: ':orderId', resolve: {order: OrderResolverService}, component: OrderComponent},
      {path: '', component: OrderDefaultComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
}
