import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipesResolverService} from './route-resolvers/recipes-resolver.service';

const routes: Routes = [
  {
    path: '', component: RecipesComponent, resolve: {
      recipes: RecipesResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {
}
