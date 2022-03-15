import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngineeringsComponent } from './engineerings/engineerings.component';
import { LinesComponent } from './lines/lines.component';
import { EngineeringsRoutingModule } from './engineerings-routing.module';
import {SharedModule} from '../shared/shared.module';
import {SectionsComponent} from './sections/sections.component';
import {EquipmentsComponent} from './equipments/equipments.component';

@NgModule({
  declarations: [EngineeringsComponent, EquipmentsComponent, SectionsComponent, LinesComponent],
  imports: [SharedModule, EngineeringsRoutingModule],
})
export class EngineeringsModule {}
