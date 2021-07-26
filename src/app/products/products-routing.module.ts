import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDefaultComponent } from './product-default/product-default.component';
import { ProductComponent } from './product/product.component';

import { ProductsComponent } from './products/products.component';
import { ProductResolverService } from './route-resolvers/product-resolver.service';
import { ProductsResolverService } from './route-resolvers/products-resolver.service';

const routes: Routes = [
    {
        path: 'products', component: ProductsComponent, resolve: {products: ProductsResolverService}, children: [
            { path: ':prodId', resolve: {product: ProductResolverService}, component: ProductComponent },
            { path: '', component: ProductDefaultComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }