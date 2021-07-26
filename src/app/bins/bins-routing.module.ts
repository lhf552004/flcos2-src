import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BinDefaultComponent } from './bin-default/bin-default.component';
import { BinComponent } from './bin/bin.component';
import { BinsComponent } from './bins/bins.component';
import { BinResolverService } from './route-resolvers/bin-resolver.service';
import { BinsResolverService } from './route-resolvers/bins-resolver.service';
import { ProductsResolverService } from './route-resolvers/products-resolver.service';



const routes: Routes = [{ path: '', component: BinsComponent,resolve: {bins: BinsResolverService, products: ProductsResolverService}, children: [
  {path: ':binId', component: BinComponent, resolve: {bin: BinResolverService}},
  {path: '', component:BinDefaultComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BinsRoutingModule { }
