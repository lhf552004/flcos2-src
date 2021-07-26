import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkFlowDesignerComponent } from './work-flow-designer/work-flow-designer.component';

const routes: Routes = [{ path: '', component: WorkFlowDesignerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowRoutingModule { }
