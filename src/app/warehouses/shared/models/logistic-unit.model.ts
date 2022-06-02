import {Base} from '../../../shared/models/base.model';

export interface LogisticUnit extends Base {
  id: string;
  name?: string;
  batchNumber?: string;
  weight: number;
  unit: string;
  type: string;
  quantity: number;
  warehouseId: string;
  warehouseName: string;
}
