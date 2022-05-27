import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineDefaultComponent } from './line-default/line-default.component';
import { LineDetailsComponent } from './line-details/line-details.component';
import { LineComponent } from './line/line.component';
import { LinesComponent } from './lines/lines.component';
import { LineResolverService } from './route-resolvers/line-resolver.service';
import { LinesResolverService } from './route-resolvers/lines-resolver.service';
import {JobsComponent} from '../jobs/jobs/jobs.component';
import {JobsResolverService} from './route-resolvers/jobs-resolver.service';

const routes: Routes = [
    {
        path: '', component: LinesComponent, resolve: { lines: LinesResolverService }
    },
    {
        path: ':lineId', resolve: { line: LineResolverService }, component: LineComponent, children: [
            { path: 'jobs', component: JobsComponent, resolve: {jobs: JobsResolverService}},
            { path: 'joblogs', loadChildren: () => import('./job-logs/job-logs.module').then(m => m.JobLogsModule) },
            { path: 'details', component: LineDetailsComponent},
            { path: '', component: LineDefaultComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinesRoutingModule { }
