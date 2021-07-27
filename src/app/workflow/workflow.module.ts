import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WorkflowRoutingModule } from './workflow-routing.module';
import { WorkFlowDesignerComponent } from './work-flow-designer/work-flow-designer.component';
import { WorkflowsComponent } from './workflows/workflows.component';
import { WorkflowDefaultComponent } from './workflow-default/workflow-default.component';


@NgModule({
  declarations: [WorkFlowDesignerComponent, WorkflowsComponent, WorkflowDefaultComponent],
  imports: [
    SharedModule,
    WorkflowRoutingModule
  ]
})
export class WorkflowModule { }
