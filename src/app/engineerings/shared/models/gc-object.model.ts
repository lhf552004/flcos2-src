import {Base} from '../../../shared/models/base.model';

export interface GcObject extends Base {
  locked: boolean;
  opcVariableIdent?: string;
  location: string;
  plc: string;
}
