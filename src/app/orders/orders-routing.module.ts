import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrdersComponent} from './orders/orders.component';
import {OrdersResolverService} from './route-resolvers/orders-resolver.service';
import {OrderResolverService} from './route-resolvers/order-resolver.service';
import {OrderComponent} from './order/order.component';
import {OrderSchemeResolverService} from './route-resolvers/order-scheme-resolver.service';

const routes: Routes = [
  {path: '', component: OrdersComponent, resolve: {orders: OrdersResolverService, scheme: OrderSchemeResolverService}},
  {path: ':orderId', resolve: {order: OrderResolverService}, component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
}
