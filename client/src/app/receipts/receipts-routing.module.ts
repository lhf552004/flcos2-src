import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ReceiptsComponent} from './receipts/receipts.component';
import {ReceiptsResolverService} from './route-resolvers/receipts-resolver.service';
import {ProductsResolverService} from './route-resolvers/products-resolver.service';
import {SuppliersResolverService} from './route-resolvers/suppliers-resolver.service';

const routes: Routes = [
  {
    path: '', component: ReceiptsComponent, resolve: {
      receipts: ReceiptsResolverService,
      products: ProductsResolverService,
      suppliers: SuppliersResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptsRoutingModule {
}
