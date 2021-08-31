import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile/profile.component';
import {UserResolverService} from './route-resolvers/user-resolver.service';

const routes: Routes = [{ path: '', component: ProfileComponent, resolve: {user: UserResolverService} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
