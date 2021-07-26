import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogisticUnitWrapperComponent } from './logistic-unit-wrapper/logistic-unit-wrapper.component';
import { LogisticUnitComponent } from './logistic-unit/logistic-unit.component';
import { LogisticUnitResolverService } from './route-resolvers/logistic-unit-resolver.service';
import { LogisticUnitsResolverService } from './route-resolvers/logistic-units-resolver.service';
import { WarehouseResolverService } from './route-resolvers/warehouse-resolver.service';
import { WarehousesResolverService } from './route-resolvers/warehouses-resolver.service';
import { WarehouseDefaultComponent } from './warehouse-default/warehouse-default.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehousesComponent } from './warehouses/warehouses.component';



const routes: Routes = [{
  path: '', component: WarehousesComponent, resolve: { warehouses: WarehousesResolverService }, children: [
    {
      path: ':warehouseId', component: WarehouseComponent, resolve: { warehouse: WarehouseResolverService, logisticUnits: LogisticUnitsResolverService },
    },
    {
      path: 'logistic-units', children: [
        { path: ':luId', component: LogisticUnitComponent, resolve: { logisticUnit: LogisticUnitResolverService } }
      ]
    },
    { path: '', component: WarehouseDefaultComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehousesRoutingModule { }
