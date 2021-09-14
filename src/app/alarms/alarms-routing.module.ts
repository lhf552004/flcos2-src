import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AlarmHomeComponent} from './alarm-home/alarm-home.component';
import {CurrentAlarmsComponent} from './current-alarms/current-alarms.component';
import {SummaryAlarmsComponent} from './summary-alarms/summary-alarms.component';
import {AlarmsConfigurationComponent} from './alarms-configuration/alarms-configuration.component';

const routes: Routes = [{
  path: '', component: AlarmHomeComponent, children: [
    {path: 'current-alarms', component: CurrentAlarmsComponent},
    {path: 'summary-alarms', component: SummaryAlarmsComponent},
    {path: 'alarms-configuration', component: AlarmsConfigurationComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlarmsRoutingModule {
}
