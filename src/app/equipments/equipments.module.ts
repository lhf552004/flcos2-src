import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentsComponent } from './equipments/equipments.component';
import { SectionsComponent } from './sections/sections.component';
import { SectionComponent } from './section/section.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentsRoutingModule } from './equipments-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EquipmentHomeComponent } from './equipment-home/equipment-home.component';
import { SectionsWrapperComponent } from './sections-wrapper/sections-wrapper.component';
import { EquipmentsWrapperComponent } from './equipments-wrapper/equipments-wrapper.component';
import { EquipmentDefaultComponent } from './equipment-default/equipment-default.component';



@NgModule({
  declarations: [EquipmentsComponent, SectionsComponent, SectionComponent, EquipmentComponent, EquipmentHomeComponent, SectionsWrapperComponent, EquipmentsWrapperComponent, EquipmentDefaultComponent],
  imports: [
    SharedModule,
    EquipmentsRoutingModule
  ]
})
export class EquipmentsModule { }
