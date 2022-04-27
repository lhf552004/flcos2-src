import {Base} from '../../../shared/models/base.model';

export interface Job extends Base {
  name: string;
  line: any;
  targetWeight: number;
  actualWeight: number;
  status: string;
  recipe?: any;
}
