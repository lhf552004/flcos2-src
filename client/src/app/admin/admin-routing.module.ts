import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {AdminComponent} from './admin/admin.component';
import {RolesComponent} from './roles/roles.component';
import {MenusComponent} from './menus/menus.component';
import {UsersResolverService} from './route-resolvers/users-resolver.service';
import {RolesResolverService} from './route-resolvers/roles-resolver.service';
import {MenusResolverService} from './route-resolvers/menus-resolver.service';


const routes: Routes = [{
  path: '', component: AdminComponent, children: [
    {path: 'users', component: UsersComponent, resolve: {users: UsersResolverService}},
    {path: 'roles', component: RolesComponent, resolve: {roles: RolesResolverService}},
    {path: 'menus', component: MenusComponent, resolve: {menus: MenusResolverService, roles: RolesResolverService}}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
