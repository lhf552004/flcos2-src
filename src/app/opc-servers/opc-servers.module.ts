import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpcServersComponent } from './opc-servers/opc-servers.component';
import { OpcServerComponent } from './opc-server/opc-server.component';
import { OpcServerDefaultComponent } from './opc-server-default/opc-server-default.component';
import {OpcServerRoutingModule} from './opc-server-routing.module';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [OpcServersComponent, OpcServerComponent, OpcServerDefaultComponent],
  imports: [
    SharedModule,
    OpcServerRoutingModule
  ]
})
export class OpcServersModule { }
