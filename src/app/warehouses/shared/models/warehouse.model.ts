import {Base} from '../../../shared/models/base.model';

export interface Warehouse extends Base {
  id: string;
  name: string;
  source?: string;
}
