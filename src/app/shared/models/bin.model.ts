import {Base} from './base.model';
import {Product} from './product.model';

export interface Bin extends Base {
  name: string;
  product: Product;
  isUsing: boolean;
  discharger: any;
  filler: any;
}
