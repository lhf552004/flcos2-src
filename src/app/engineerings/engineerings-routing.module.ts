import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentsComponent } from './equipments/equipments.component';
import { EquipmentsResolverService } from './route-resolvers/equipments-resolver.service';
import { SectionsResolverService } from './route-resolvers/sections-resolver.service';
import { SectionsComponent } from './sections/sections.component';
import { AuthGuardService } from '../core/user/auth-guard.service';
import { EngineeringsComponent } from './engineerings/engineerings.component';
import { LinesComponent } from './lines/lines.component';
import {LinesResolverService} from './route-resolvers/lines-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: EngineeringsComponent,
    /*canActivate: [AuthGuardService],*/ children: [
      {
        path: 'sections',
        component: SectionsComponent,
        /*canActivate: [AuthGuardService],*/
      },
      {
        path: 'equipments',
        component: EquipmentsComponent,
        /*canActivate: [AuthGuardService],*/
      },
      { path: 'lines', component: LinesComponent, resolve: {lines: LinesResolverService} },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringsRoutingModule {}
