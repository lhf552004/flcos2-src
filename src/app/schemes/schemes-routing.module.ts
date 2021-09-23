import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from '../profile/profile/profile.component';
import {UserResolverService} from '../profile/route-resolvers/user-resolver.service';
import {SchemesComponent} from './schemes/schemes.component';
import {SchemesResolverService} from './route-resolvers/schemes-resolver.service';
import {SchemeComponent} from './scheme/scheme.component';
import {SchemeResolverService} from './route-resolvers/scheme-resolver.service';
import {SchemeDefaultComponent} from './scheme-default/scheme-default.component';

const routes: Routes = [{
  path: '', component: SchemesComponent, resolve: {schemes: SchemesResolverService}, children: [
    {path: ':schemeName', component: SchemeComponent, resolve: {scheme: SchemeResolverService}},
    {path: '', component: SchemeDefaultComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemesRoutingModule {
}
