import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {JobsComponent} from './jobs/jobs.component';
import {JobsResolverService} from './route-resolvers/jobs-resolver.service';
import {JobComponent} from './job/job.component';
import {JobResolverService} from './route-resolvers/job-resolver.service';
import {JobDefaultComponent} from './job-default/job-default.component';

const routes: Routes = [{
  path: ':lineId', component: JobsComponent, resolve: {jobs: JobsResolverService}, children: [
    {path: ':jobId', component: JobComponent, resolve: {job: JobResolverService}},
    {path: '', component: JobDefaultComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule {
}
