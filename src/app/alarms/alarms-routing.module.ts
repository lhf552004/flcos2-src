import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AlarmHomeComponent} from './alarm-home/alarm-home.component';
import {CurrentAlarmsComponent} from './current-alarms/current-alarms.component';
import {SummaryAlarmsComponent} from './summary-alarms/summary-alarms.component';
import {AlarmsConfigurationComponent} from './alarms-configuration/alarms-configuration.component';
import {CurrentAlarmsResolverService} from './route-resolvers/current-alarms-resolver.service';
import {AlarmsResolverService} from './route-resolvers/alarms-resolver.service';

const routes: Routes = [{
  path: '', component: AlarmHomeComponent, children: [
    {path: 'current-alarms', component: CurrentAlarmsComponent, resolve: {currentAlarms: CurrentAlarmsResolverService}},
    {path: 'summary-alarms', component: SummaryAlarmsComponent, resolve: {alarms: AlarmsResolverService}},
    {path: 'alarms-configuration', component: AlarmsConfigurationComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlarmsRoutingModule {
}
