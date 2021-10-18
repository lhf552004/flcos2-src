import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ExternalRoutingModule} from './external-routing.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import {SafePipe} from './safe.pipe';



@NgModule({
  declarations: [WrapperComponent, SafePipe],
  imports: [
    SharedModule,
    ExternalRoutingModule
  ]
})
export class ExternalModule { }
