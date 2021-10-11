import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {DiagnosticsRoutingModule} from './diagnostics-routing.module';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';



@NgModule({
  declarations: [DiagnosticsComponent],
  imports: [
    SharedModule,
    DiagnosticsRoutingModule
  ]
})
export class DiagnosticsModule { }
