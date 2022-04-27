import {Base} from '../../../shared/models/base.model';
import {Supplier} from './supplier.model';
import {Product} from './product.model';

export interface Receipt extends Base {
  batchNumber: string;
  supplier: Supplier;
  product: Product;
  quantity: number;
  unitType: string;
  unit: number;
  packageType: string;
}
