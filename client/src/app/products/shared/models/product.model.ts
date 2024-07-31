import {Base} from '../../../shared/models/base.model';

export interface Product extends Base {
  id: string;
  name: string;
  productType: string;
}
