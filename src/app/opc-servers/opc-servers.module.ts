import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpcServersComponent } from './opc-servers/opc-servers.component';
import { OpcServerComponent } from './opc-server/opc-server.component';
import { OpcServerDefaultComponent } from './opc-server-default/opc-server-default.component';
import {OpcServerRoutingModule} from './opc-server-routing.module';
import {SharedModule} from '../shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [OpcServersComponent, OpcServerComponent, OpcServerDefaultComponent],
  imports: [
    SharedModule,
    NgbDropdownModule,
    OpcServerRoutingModule
  ]
})
export class OpcServersModule { }
