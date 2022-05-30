import {Base} from './base.model';
import {Ingredient} from './ingredient.model';
import {SimpleBase} from './simple-base.model';

export interface Recipe extends Base {
  name: string;
  isTemplate: boolean;
  job: SimpleBase;
  product: SimpleBase;
  line: SimpleBase;
  ingredients: Ingredient[];
}
