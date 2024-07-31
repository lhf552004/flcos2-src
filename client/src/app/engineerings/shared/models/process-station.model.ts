import {GcObject} from './gc-object.model';
import {Filler} from './filler.model';
import {Discharger} from './discharger.model';

export interface ProcessStation extends GcObject {
  index: number;
  name: string;
  status: string;
  dischargers: Discharger[];
  fillers: Filler[];
}
