import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from '../angular-material-module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutes} from './dashboard.routing';
import {ChartistModule} from 'ng-chartist';
import {SalesOverviewGrapComponent} from './dashboard-components/sales-overview-grap/sales-overview-grap.component';
import {VisiterGraphComponent} from './dashboard-components/visiter-graph/visiter-graph.component';
import {StickerComponent} from './dashboard-components/sticker/sticker.component';
import {ContactsComponent} from './dashboard-components/contacts/contacts.component';
import {ActivityComponent} from './dashboard-components/activity/activity.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [DashboardComponent, SalesOverviewGrapComponent, VisiterGraphComponent, StickerComponent, ContactsComponent, ActivityComponent]
})
export class DashboardModule {
}
