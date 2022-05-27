import { NgModule } from '@angular/core';
import { JobsComponent } from './jobs/jobs.component';
import {SharedModule} from '../shared/shared.module';
import {JobRoutingModule} from './job-routing.module';
import { JobComponent } from './job/job.component';
import { JobDefaultComponent } from './job-default/job-default.component';

@NgModule({
  declarations: [JobsComponent, JobComponent, JobDefaultComponent],
  imports: [
    SharedModule,
    JobRoutingModule
  ]
})
export class JobsModule { }
