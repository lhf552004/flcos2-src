import {Base} from '../../../shared/models/base.model';

export interface Ingredient extends Base {
  name: string;
  type: string;
}
