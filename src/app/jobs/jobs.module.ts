import { NgModule } from '@angular/core';
import { JobsComponent } from './jobs/jobs.component';
import {SharedModule} from '../shared/shared.module';
import {JobRoutingModule} from './job-routing.module';

@NgModule({
  declarations: [JobsComponent],
  imports: [
    SharedModule,
    JobRoutingModule
  ]
})
export class JobsModule { }
