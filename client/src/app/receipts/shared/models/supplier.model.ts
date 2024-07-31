import {Base} from '../../../shared/models/base.model';

export interface Supplier extends Base {
  name: string;
  address: string;
  email: string;
  phone: string;
}
