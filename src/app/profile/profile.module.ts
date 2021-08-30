import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {ProfileRoutingModule} from './profile-routing.module';
import {DemoMaterialModule} from '../demo-material-module';
import { MatInputModule } from '@angular/material/input';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    SharedModule,
    MatInputModule,
    DemoMaterialModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
