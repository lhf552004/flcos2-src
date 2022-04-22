import {GcObject} from './gc-object.model';
import {Filler} from './filler.model';
import {Discharger} from './discharger.model';

export interface RegistrationScale extends GcObject {
  currentFlowRate: number;
  gcsScalingFactorFlowRate: number;
  totalWeight: number;
  state: string;
}
