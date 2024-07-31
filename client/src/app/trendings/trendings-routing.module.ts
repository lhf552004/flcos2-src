import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProcessVariablesComponent} from './process-variables/process-variables.component';
import {TrendingsComponent} from './trendings/trendings.component';
import {ProcessVariablesResolverService} from './route-resolvers/process-variables-resolver.service';


const routes: Routes = [{
  path: '', component: TrendingsComponent, children: [
    {path: 'process-variables', component: ProcessVariablesComponent, resolve: {processVariables: ProcessVariablesResolverService}},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingsRoutingModule {
}
