import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {JmmComponent} from './jmm/jmm.component';

const routes: Routes = [{
  path: '', component: JmmComponent, children: [
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JmmRoutingModule {
}
