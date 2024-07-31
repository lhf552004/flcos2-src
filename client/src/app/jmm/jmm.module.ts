import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {JmmRoutingModule} from './jmm-routing.module';
import { JmmComponent } from './jmm/jmm.component';



@NgModule({
  declarations: [JmmComponent],
  imports: [
    SharedModule,
    JmmRoutingModule
  ]
})
export class JmmModule { }
