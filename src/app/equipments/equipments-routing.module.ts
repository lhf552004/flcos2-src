import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentDefaultComponent } from './equipment-default/equipment-default.component';
import { EquipmentHomeComponent } from './equipment-home/equipment-home.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentsWrapperComponent } from './equipments-wrapper/equipments-wrapper.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { EquipmentResolverService } from './route-resolvers/equipment-resolver.service';
import { EquipmentsResolverService } from './route-resolvers/equipments-resolver.service';
import { SectionResolverService } from './route-resolvers/section-resolver.service';
import { SectionsResolverService } from './route-resolvers/sections-resolver.service';
import { SectionComponent } from './section/section.component';
import { SectionsWrapperComponent } from './sections-wrapper/sections-wrapper.component';
import { SectionsComponent } from './sections/sections.component';
import { AuthGuardService } from '../core/user/auth-guard.service';

const routes: Routes = [
  {
    path: '', component: EquipmentHomeComponent, /*canActivate: [AuthGuardService],*/ children: [
      {
        path: 'sections', component: SectionsWrapperComponent, /*canActivate: [AuthGuardService],*/children: [
          { path: '', resolve: { sections: SectionsResolverService }, /*canActivate: [AuthGuardService],*/ component: SectionsComponent },
          { path: ':sectionId', resolve: { section: SectionResolverService }, component: SectionComponent }
        ]
      },
      {
        path: 'equipments', component: EquipmentsWrapperComponent, /*canActivate: [AuthGuardService],*/ children: [
          { path: '', resolve: { equipments: EquipmentsResolverService }, /*canActivate: [AuthGuardService],*/ component: EquipmentsComponent },
          { path: ':equipId', resolve: { equipment: EquipmentResolverService }, component: EquipmentComponent }
        ]
      },
      { path: '', component: EquipmentDefaultComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentsRoutingModule { }
