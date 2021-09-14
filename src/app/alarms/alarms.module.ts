import { NgModule } from '@angular/core';
import { AlarmHomeComponent } from './alarm-home/alarm-home.component';
import { SummaryAlarmsComponent } from './summary-alarms/summary-alarms.component';
import { AlarmsConfigurationComponent } from './alarms-configuration/alarms-configuration.component';
import { CurrentAlarmsComponent } from './current-alarms/current-alarms.component';
import {AlarmsRoutingModule} from './alarms-routing.module';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [AlarmHomeComponent, SummaryAlarmsComponent, AlarmsConfigurationComponent, CurrentAlarmsComponent],
  imports: [
    SharedModule,
    AlarmsRoutingModule
  ]
})
export class AlarmsModule { }
