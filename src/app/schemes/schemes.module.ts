import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemesComponent } from './schemes/schemes.component';
import { SchemeDefaultComponent } from './scheme-default/scheme-default.component';
import { SchemeComponent } from './scheme/scheme.component';
import {SharedModule} from '../shared/shared.module';
import {SchemesRoutingModule} from './schemes-routing.module';



@NgModule({
  declarations: [SchemesComponent, SchemeDefaultComponent, SchemeComponent],
  imports: [
    SharedModule,
    SchemesRoutingModule
  ]
})
export class SchemesModule { }
