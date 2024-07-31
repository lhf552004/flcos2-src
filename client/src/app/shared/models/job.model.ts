import {Base} from './base.model';
import {Recipe} from './recipe.model';
import {SimpleBase} from './simple-base.model';

export interface Job extends Base {
  name: string;
  line: SimpleBase;
  targetWeight: number;
  actualWeight: number;
  status: string;
  recipe?: Recipe;
}
