import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobDefaultComponent } from './job-default/job-default.component';
import { JobComponent } from './job/job.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobResolverService } from './route-resolvers/job-resolver.service';
import { JobsResolverService } from './route-resolvers/jobs-resolver.service';

const routes: Routes = [
    {
        path: '', component: JobsComponent, resolve: {jobs: JobsResolverService}
    },
    { path: ':jobId', resolve: {job: JobResolverService}, component: JobComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }