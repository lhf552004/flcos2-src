import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {JobsComponent} from './jobs/jobs.component';
import {JobsResolverService} from './route-resolvers/jobs-resolver.service';

const routes: Routes = [{
  path: ':lineId', component: JobsComponent, resolve: {jobs: JobsResolverService}, children: []
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule {
}
