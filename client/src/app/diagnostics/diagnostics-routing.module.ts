import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DiagnosticsComponent} from './diagnostics/diagnostics.component';
import {DiagnosticComponent} from './diagnostic/diagnostic.component';
import {DiagnosticDefaultComponent} from './diagnostic-default/diagnostic-default.component';
import {OpcNodeListResolverService} from './route-resolvers/opc-node-list-resolver.service';
import {OpcNodeResolverService} from './route-resolvers/opc-node-resolver.service';


const routes: Routes = [
  {
    path: '', component: DiagnosticsComponent, resolve: {nodeList: OpcNodeListResolverService}, children: [
      {path: ':opcNodeId', component: DiagnosticComponent, resolve: {node: OpcNodeResolverService}},
      {path: '', component: DiagnosticDefaultComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosticsRoutingModule {
}
