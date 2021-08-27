import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './core/error/page404/page404.component';

const routes: Routes = [
    // Redirect to home URL if route is not specified.
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    // { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
    { path: 'lines', loadChildren: () => import('./lines/lines.module').then(m => m.LinesModule) },
    { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
    { path: 'warehouses', loadChildren: () => import('./warehouses/warehouses.module').then(m => m.WarehousesModule) },
    { path: 'equipments', loadChildren: () => import('./equipments/equipments.module').then(m => m.EquipmentsModule) },
    { path: 'bins', loadChildren: () => import('./bins/bins.module').then(m => m.BinsModule) },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: 'workflow', loadChildren: () => import('./workflow/workflow.module').then(m => m.WorkflowModule) },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
    // Turn enableTracing to true in the line below for debugging purposes. It will provide router tracing in the console
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
