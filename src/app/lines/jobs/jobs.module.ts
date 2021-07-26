import { NgModule } from '@angular/core';
import { JobsComponent } from './jobs/jobs.component';
import { JobComponent } from './job/job.component';
import { JobDefaultComponent } from './job-default/job-default.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [JobsComponent, JobComponent, JobDefaultComponent],
  imports: [
    JobsRoutingModule,
    SharedModule,
    NgbDropdownModule
  ]
})
export class JobsModule { }
