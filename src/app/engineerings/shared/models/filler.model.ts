import {Equipment} from './equipment.model';
import {GcObject} from './gc-object.model';

export interface Filler extends GcObject {
  priority: number;
  name: string;
  category: string;

}
