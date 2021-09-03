import {Product} from './product.model';

export class Bin {
  id: string;
  name: string;
  type: string;
  productId?: string;
  productName?: string;
  maxWeight: number;
  currentWeight: number;
  unit: string;
}
