import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {DiagnosticsRoutingModule} from './diagnostics-routing.module';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import { DiagnosticDefaultComponent } from './diagnostic-default/diagnostic-default.component';

@NgModule({
  declarations: [DiagnosticsComponent, DiagnosticComponent, DiagnosticDefaultComponent],
  imports: [
    SharedModule,
    DiagnosticsRoutingModule
  ]
})
export class DiagnosticsModule { }
