import {Base} from './base.model';
import {SimpleBase} from './simple-base.model';

export interface Ingredient extends Base {
  product: SimpleBase;
  percentage: number;
  targetWeight: number;
  actualWeight: number;
  sender: SimpleBase;
  receiver: SimpleBase;
}
