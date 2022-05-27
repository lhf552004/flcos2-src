import {Base} from '../../../shared/models/base.model';
import {Ingredient} from './ingredient.model';

export interface Recipe extends Base {
  name: string;
  isTemplate: boolean;
  job: { id: string, name: string };
  product: { id: string, name: string };
  line: { id: string, name: string };
  ingredients: Ingredient[];
}
