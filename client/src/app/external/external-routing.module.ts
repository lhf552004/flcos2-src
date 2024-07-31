import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DiagnosticsComponent} from '../diagnostics/diagnostics/diagnostics.component';
import {OpcNodeListResolverService} from '../diagnostics/route-resolvers/opc-node-list-resolver.service';
import {DiagnosticComponent} from '../diagnostics/diagnostic/diagnostic.component';
import {OpcNodeResolverService} from '../diagnostics/route-resolvers/opc-node-resolver.service';
import {DiagnosticDefaultComponent} from '../diagnostics/diagnostic-default/diagnostic-default.component';
import {WrapperComponent} from './wrapper/wrapper.component';



const routes: Routes = [
  {
    path: '', component: WrapperComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalRoutingModule { }
