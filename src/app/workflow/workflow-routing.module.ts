import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {WorkFlowDesignerComponent} from './work-flow-designer/work-flow-designer.component';
import {WorkflowsComponent} from './workflows/workflows.component';
import {WorkflowsResolverService} from './route-resolvers/workflows-resolver.service';
import {WorkflowResolverService} from './route-resolvers/workflow-resolver.service';
import {WorkflowDefaultComponent} from './workflow-default/workflow-default.component';

const routes: Routes = [
  {path: '', component: WorkflowsComponent, resolve: {workflows: WorkflowsResolverService}, children: [
      {path: ':workflowId', resolve: {workflow: WorkflowResolverService}, component: WorkFlowDesignerComponent},
      { path: '', component: WorkflowDefaultComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowRoutingModule {
}
