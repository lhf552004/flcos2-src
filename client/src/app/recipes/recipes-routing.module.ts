import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipesResolverService} from './route-resolvers/recipes-resolver.service';
import {LinesResolverService} from './route-resolvers/lines-resolver.service';
import {ProductsResolverService} from './route-resolvers/products-resolver.service';

const routes: Routes = [
  {
    path: '', component: RecipesComponent, resolve: {
      recipes: RecipesResolverService,
      lines: LinesResolverService,
      products: ProductsResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {
}
