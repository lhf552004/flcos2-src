import {Base} from '../../../shared/models/base.model';

export interface Product extends Base {
  name: string;
  type: string;
}
