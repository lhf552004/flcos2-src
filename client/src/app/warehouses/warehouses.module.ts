import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { LogisticUnitComponent } from './logistic-unit/logistic-unit.component';
import { SharedModule } from '../shared/shared.module';
import { WarehousesRoutingModule } from './warehouses-routing.module';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { LogisticUnitWrapperComponent } from './logistic-unit-wrapper/logistic-unit-wrapper.component';
import { WarehouseDefaultComponent } from './warehouse-default/warehouse-default.component';



@NgModule({
  declarations: [WarehousesComponent, LogisticUnitComponent, WarehouseComponent, LogisticUnitWrapperComponent, WarehouseDefaultComponent],
  imports: [
    SharedModule,
    WarehousesRoutingModule
  ]
})
export class WarehousesModule { }
