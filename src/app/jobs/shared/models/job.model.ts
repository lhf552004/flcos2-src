import {Base} from '../../../shared/models/base.model';
import {Recipe} from './recipe.model';

export interface Job extends Base {
  name: string;
  line: any;
  targetWeight: number;
  actualWeight: number;
  status: string;
  recipe?: Recipe;
}
