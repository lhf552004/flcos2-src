import {GcObject} from './gc-object.model';
import {Filler} from './filler.model';
import {Discharger} from './discharger.model';

export interface Scale extends GcObject {
  unit: number;
  componentNoMaxCfg: number;
  capacity: number;
  dosingAmountMin: number;
  dosingAmountMax: number;
  weightMax: number;
  ingredientWeightTarget: number;
  ingredientWeightActual: number;
  ingredientNumberCurrent: number;
  category: string;
}
