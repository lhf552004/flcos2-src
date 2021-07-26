import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LogisticUnit } from './models/logistic-unit.model';
import { Warehouse } from './models/warehouse.model';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  warehouses: Warehouse[] = [
    { id: 'b4b5191d-9162-4fbd-9836-a63f97b3b42a', name: 'Reception' },
    { id: 'aaba2afb-c900-4ec2-bcc3-b14fbf180ea3', name: 'Dispensary' },
    { id: 'ef76b752-9856-4653-9c8e-23281d715b79', name: 'Packing1' },
    { id: '6301af5e-ff73-48a9-b703-c459120108bc', name: 'Packing2' },
    { id: 'fd3d7c94-fc82-4b8a-b24f-2f337f87542a', name: 'Finished Product' }
  ];

  logisticUnits: LogisticUnit[] = [
    { id: '5da156ae-5d8b-4bb6-b725-471e94744f26', type: 'bag', batchNumber: '20201001', weight: 100, unit: 'kg', quantity: 1, warehouseId: 'b4b5191d-9162-4fbd-9836-a63f97b3b42a', warehouseName: 'Reception' },
    { id: '432cd2f4-b472-42fc-8488-6596498ca148', type: 'bag', batchNumber: '20201001', weight: 100, unit: 'kg', quantity: 1, warehouseId: 'b4b5191d-9162-4fbd-9836-a63f97b3b42a', warehouseName: 'Reception' },
    { id: '192d875b-422b-466d-abeb-c83df17571f8', type: 'bag', batchNumber: '20201001', weight: 100, unit: 'kg', quantity: 1, warehouseId: 'b4b5191d-9162-4fbd-9836-a63f97b3b42a', warehouseName: 'Reception' },
    { id: 'cca541e2-6cb6-47bd-838c-44073d948a0f', type: 'bag', batchNumber: '20201001', weight: 100, unit: 'kg', quantity: 1, warehouseId: 'b4b5191d-9162-4fbd-9836-a63f97b3b42a', warehouseName: 'Reception' },
    { id: 'e294f883-1df5-481b-b665-0afe07c0d9a4', type: 'bag', batchNumber: '20201001', weight: 100, unit: 'kg', quantity: 1, warehouseId: 'b4b5191d-9162-4fbd-9836-a63f97b3b42a', warehouseName: 'Reception' },

    { id: 'ce274acc-a151-4364-aabc-ad186021faf9', type: 'trolly', batchNumber: '20200930', weight: 3000, unit: 'kg', quantity: 30, warehouseId: 'b4b5191d-9162-4fbd-9836-a63f97b3b42a', warehouseName: 'Reception' },

    { id: '446584cf-ee79-4d13-b509-f73d405fe9aa', type: 'bag', batchNumber: 'MIX1:000001', weight: 25, unit: 'kg', quantity: 1, warehouseId: 'fd3d7c94-fc82-4b8a-b24f-2f337f87542a', warehouseName: 'Finished Product' },
    { id: '77024b71-9656-4023-a1e5-c45e47980416', type: 'bag', batchNumber: 'MIX1:000001', weight: 25, unit: 'kg', quantity: 1, warehouseId: 'fd3d7c94-fc82-4b8a-b24f-2f337f87542a', warehouseName: 'Finished Product' },
    { id: '1ac069b2-f7b6-4604-a149-6dd7c1ac0bd6', type: 'bag', batchNumber: 'MIX1:000001', weight: 25, unit: 'kg', quantity: 1, warehouseId: 'fd3d7c94-fc82-4b8a-b24f-2f337f87542a', warehouseName: 'Finished Product' },
    { id: 'c2e80e40-51ef-48dc-8e4e-3d8c7bca7ea7', type: 'bag', batchNumber: 'MIX1:000001', weight: 25, unit: 'kg', quantity: 1, warehouseId: 'fd3d7c94-fc82-4b8a-b24f-2f337f87542a', warehouseName: 'Finished Product' },
    { id: '1ac0277c-95ad-4d5a-9bd3-535ddbfb5f0b', type: 'bag', batchNumber: 'MIX1:000001', weight: 25, unit: 'kg', quantity: 1, warehouseId: 'fd3d7c94-fc82-4b8a-b24f-2f337f87542a', warehouseName: 'Finished Product' },
  ];

  constructor() { }

  getWarehouses(): Observable<Warehouse[]> {
    return of(this.warehouses);
  }

  getWarehouse(id: string): Observable<Warehouse> {
    return of(this.warehouses.find(w => w.id === id));
  }

  getLogisticUnits(warehouseId: string): Observable<LogisticUnit[]> {
    return of(this.logisticUnits.filter(l => l.warehouseId === warehouseId));
  }

  getLogiticUnit(id: string): Observable<LogisticUnit> {
    return of(this.logisticUnits.find(l => l.id === id));
  }
}
