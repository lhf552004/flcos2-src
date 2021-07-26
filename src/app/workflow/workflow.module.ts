import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WorkflowRoutingModule } from './workflow-routing.module';
import { WorkFlowDesignerComponent } from './work-flow-designer/work-flow-designer.component';


@NgModule({
  declarations: [WorkFlowDesignerComponent],
  imports: [
    SharedModule,
    WorkflowRoutingModule
  ]
})
export class WorkflowModule { }
