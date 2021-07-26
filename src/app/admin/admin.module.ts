import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
