import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngineeringsComponent } from './engineerings/engineerings.component';
import { LinesComponent } from './lines/lines.component';
import { EngineeringsRoutingModule } from './engineerings-routing.module';
import {SharedModule} from '../shared/shared.module';
import {SectionsComponent} from './sections/sections.component';
import {EquipmentsComponent} from './equipments/equipments.component';
import { LineViewerComponent } from './line-viewer/line-viewer.component';

@NgModule({
  declarations: [EngineeringsComponent, EquipmentsComponent, SectionsComponent, LinesComponent, LineViewerComponent],
  imports: [SharedModule, EngineeringsRoutingModule],
})
export class EngineeringsModule {}
