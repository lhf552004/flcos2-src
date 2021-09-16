import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RolesComponent } from './roles/roles.component';
import { MenusComponent } from './menus/menus.component';
import { AdminComponent } from './admin/admin.component';
import { UserViewerComponent } from './user-viewer/user-viewer.component';
import { RolesSelectorComponent } from './roles-selector/roles-selector.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalContentComponent } from './ngb-modal-content/ngb-modal-content.component';
@NgModule({
  declarations: [UsersComponent, RolesComponent, MenusComponent, AdminComponent, UserViewerComponent, RolesSelectorComponent, NgbModalContentComponent],
  imports: [
    SharedModule,
    AdminRoutingModule,
    NgbModule
  ]
})
export class AdminModule { }
