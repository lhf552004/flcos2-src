import {Base} from '../../../shared/models/base.model';

export interface Recipe extends Base {
  name: string;
  type: string;
}
