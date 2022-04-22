import {Equipment} from './equipment.model';
import {GcObject} from './gc-object.model';

export interface Discharger extends GcObject {
  index: number;
  name: string;
  status: string;
  dischargers: any[];
  fillers: any[];
}
