import {NgModule} from '@angular/core';
import {UsersComponent} from './users/users.component';
import {AdminRoutingModule} from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import {RolesComponent} from './roles/roles.component';
import {MenusComponent} from './menus/menus.component';
import {AdminComponent} from './admin/admin.component';
import {UserViewerComponent} from './user-viewer/user-viewer.component';
import {RolesSelectorComponent} from './roles-selector/roles-selector.component';

@NgModule({
  declarations: [UsersComponent, RolesComponent, MenusComponent, AdminComponent, UserViewerComponent, RolesSelectorComponent],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule {
}
