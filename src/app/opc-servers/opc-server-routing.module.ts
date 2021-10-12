import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OpcServersComponent} from './opc-servers/opc-servers.component';
import {OpcServerResolverService} from './route-resolvers/opc-server-resolver.service';
import {OpcServersResolverService} from './route-resolvers/opc-servers-resolver.service';
import {OpcServerComponent} from './opc-server/opc-server.component';
import {OpcServerDefaultComponent} from './opc-server-default/opc-server-default.component';


const routes: Routes = [{
  path: '', component: OpcServersComponent, resolve: {opcServers: OpcServersResolverService}, children: [
    {path: ':opcServerId', component: OpcServerComponent, resolve: {opcServer: OpcServerResolverService}},
    {path: '', component: OpcServerDefaultComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpcServerRoutingModule {
}
