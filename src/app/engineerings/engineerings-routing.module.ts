import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SectionsResolverService} from './route-resolvers/sections-resolver.service';
import {SectionsComponent} from './sections/sections.component';
import {AuthGuardService} from '../core/user/auth-guard.service';
import {EngineeringsComponent} from './engineerings/engineerings.component';
import {LinesComponent} from './lines/lines.component';
import {LinesResolverService} from './route-resolvers/lines-resolver.service';
import {MixersComponent} from './mixers/mixers.component';
import {MixersResolverService} from './route-resolvers/mixers-resolver.service';
import {FillersComponent} from './fillers/fillers.component';
import {FillersResolverService} from './route-resolvers/fillers-resolver.service';
import {DischargersComponent} from './dischargers/dischargers.component';
import {DischargersResolverService} from './route-resolvers/dischargers-resolver.service';
import {ScalesComponent} from './scales/scales.component';
import {ScalesResolverService} from './route-resolvers/scales-resolver.service';
import {RegistrationScalesComponent} from './registration-scales/registration-scales.component';
import {RegistrationScalesResolverService} from './route-resolvers/registration-scales-resolver.service';
import {ProcessStationsComponent} from './process-stations/process-stations.component';
import {ProcessStationsResolverService} from './route-resolvers/process-stations-resolver.service';
import {ConveyingStationsComponent} from './conveying-stations/conveying-stations.component';
import {ConveyingStationsResolverService} from './route-resolvers/conveying-stations-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: EngineeringsComponent,
    /*canActivate: [AuthGuardService],*/ children: [
      {path: 'sections', component: SectionsComponent, resolve: {sections: SectionsResolverService}},
      {path: 'lines', component: LinesComponent, resolve: {lines: LinesResolverService}},
      {path: 'mixers', component: MixersComponent, resolve: {mixers: MixersResolverService}},
      {path: 'fillers', component: FillersComponent, resolve: {fillers: FillersResolverService}},
      {path: 'dischargers', component: DischargersComponent, resolve: {dischargers: DischargersResolverService}},
      {path: 'scales', component: ScalesComponent, resolve: {scales: ScalesResolverService}},
      {
        path: 'registration-scales',
        component: RegistrationScalesComponent,
        resolve: {registrationScales: RegistrationScalesResolverService}
      },
      {path: 'process-stations', component: ProcessStationsComponent, resolve: {processStations: ProcessStationsResolverService}},
      {path: 'conveying-stations', component: ConveyingStationsComponent, resolve: {conveyingStations: ConveyingStationsResolverService}}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringsRoutingModule {
}
