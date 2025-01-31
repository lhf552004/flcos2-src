import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/user/auth-guard.service';

import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent, /*canActivate: [AuthGuardService]*/ }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
