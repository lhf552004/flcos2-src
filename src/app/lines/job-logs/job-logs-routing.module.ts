import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobLogsComponent } from './job-logs/job-logs.component';

const routes: Routes = [
    {
        path: '', component: JobLogsComponent
    },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobLogsRoutingModule { }