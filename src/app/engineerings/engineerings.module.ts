import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngineeringsComponent } from './engineerings/engineerings.component';
import { LinesComponent } from './lines/lines.component';
import { EngineeringsRoutingModule } from './engineerings-routing.module';
import {SharedModule} from '../shared/shared.module';
import {SectionsComponent} from './sections/sections.component';
import {EquipmentsComponent} from './equipments/equipments.component';
import { LineViewerComponent } from './line-viewer/line-viewer.component';
import { MixersComponent } from './mixers/mixers.component';
import { ScalesComponent } from './scales/scales.component';
import { FillersComponent } from './fillers/fillers.component';
import { DischargersComponent } from './dischargers/dischargers.component';
import { ProcessStationsComponent } from './process-stations/process-stations.component';
import { ConveyingStationsComponent } from './conveying-stations/conveying-stations.component';
import { RegistrationScalesComponent } from './registration-scales/registration-scales.component';

@NgModule({
  declarations: [EngineeringsComponent, SectionsComponent, LinesComponent, LineViewerComponent, MixersComponent, ScalesComponent, FillersComponent, DischargersComponent, ProcessStationsComponent, ConveyingStationsComponent, RegistrationScalesComponent],
  imports: [SharedModule, EngineeringsRoutingModule],
})
export class EngineeringsModule {}
