import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EquipmentHomeComponent} from '../equipments/equipment-home/equipment-home.component';
import {SectionsWrapperComponent} from '../equipments/sections-wrapper/sections-wrapper.component';
import {SectionsResolverService} from '../equipments/route-resolvers/sections-resolver.service';
import {SectionsComponent} from '../equipments/sections/sections.component';
import {SectionResolverService} from '../equipments/route-resolvers/section-resolver.service';
import {SectionComponent} from '../equipments/section/section.component';
import {EquipmentsWrapperComponent} from '../equipments/equipments-wrapper/equipments-wrapper.component';
import {EquipmentsResolverService} from '../equipments/route-resolvers/equipments-resolver.service';
import {EquipmentsComponent} from '../equipments/equipments/equipments.component';
import {EquipmentResolverService} from '../equipments/route-resolvers/equipment-resolver.service';
import {EquipmentComponent} from '../equipments/equipment/equipment.component';
import {EquipmentDefaultComponent} from '../equipments/equipment-default/equipment-default.component';


const routes: Routes = [
  {
    path: '', component: EquipmentHomeComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosticsRoutingModule {
}
