import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {ProfileRoutingModule} from './profile-routing.module';
import {AngularMaterialModule} from '../angular-material-module';
import { MatInputModule } from '@angular/material/input';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    MatInputModule,
    AngularMaterialModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
