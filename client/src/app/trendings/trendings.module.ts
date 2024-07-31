import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {TrendingsRoutingModule} from './trendings-routing.module';
import { ProcessVariablesComponent } from './process-variables/process-variables.component';
import { TrendingsComponent } from './trendings/trendings.component';



@NgModule({
  declarations: [ProcessVariablesComponent, TrendingsComponent],
  imports: [
    SharedModule,
    TrendingsRoutingModule
  ]
})
export class TrendingsModule { }
