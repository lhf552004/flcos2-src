import { NgModule } from '@angular/core';
import { JobLogsComponent } from './job-logs/job-logs.component';
import { JobLogsRoutingModule } from './job-logs-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [JobLogsComponent],
  imports: [
    SharedModule,
    JobLogsRoutingModule
  ]
})
export class JobLogsModule { }
