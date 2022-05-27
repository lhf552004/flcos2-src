import {Base} from '../../../shared/models/base.model';

export interface Ingredient extends Base {
  product: { id: string, name: string };
  percentage: number;
  targetWeight: number;
  actualWeight: number;
  sender: { id: string, name: string };
  receiver: { id: string, name: string };
}
