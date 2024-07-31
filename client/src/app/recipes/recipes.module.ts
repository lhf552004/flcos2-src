import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {RecipesRoutingModule} from './recipes-routing.module';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [RecipesComponent],
  imports: [
    SharedModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
