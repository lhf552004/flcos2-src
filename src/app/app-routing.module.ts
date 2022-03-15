import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page404Component} from './core/error/page404/page404.component';
import {AuthGuardService} from './core/user/auth-guard.service';

const routes: Routes = [
  // Redirect to home URL if route is not specified.
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'profile', canActivate: [AuthGuardService], loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'products', canActivate: [AuthGuardService], loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  {path: 'lines', canActivate: [AuthGuardService], loadChildren: () => import('./lines/lines.module').then(m => m.LinesModule)},
  {path: 'orders', canActivate: [AuthGuardService], loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)},
  {path: 'jobs', canActivate: [AuthGuardService], loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule)},
  {
    path: 'warehouses',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./warehouses/warehouses.module').then(m => m.WarehousesModule)
  },
  {
    path: 'engineerings',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./engineerings/engineerings.module').then(m => m.EngineeringsModule)
  },
  {path: 'bins', canActivate: [AuthGuardService], loadChildren: () => import('./bins/bins.module').then(m => m.BinsModule)},
  {path: 'admin', canActivate: [AuthGuardService], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'workflow', canActivate: [AuthGuardService], loadChildren: () => import('./workflow/workflow.module').then(m => m.WorkflowModule)},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'alarms', loadChildren: () => import('./alarms/alarms.module').then(m => m.AlarmsModule)},
  {path: 'schemes', loadChildren: () => import('./schemes/schemes.module').then(m => m.SchemesModule)},
  {path: 'opc-servers', loadChildren: () => import('./opc-servers/opc-servers.module').then(m => m.OpcServersModule)},
  {path: 'diagnostics', loadChildren: () => import('./diagnostics/diagnostics.module').then(m => m.DiagnosticsModule)},
  {path: 'external', loadChildren: () => import('./external/external.module').then(m => m.ExternalModule)},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  // Turn enableTracing to true in the line below for debugging purposes. It will provide router tracing in the console
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
