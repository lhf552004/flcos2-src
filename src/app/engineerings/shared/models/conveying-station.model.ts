import {ProcessStation} from './process-station.model';
import {Bin} from '../../../shared/models/bin.model';

export interface ConveyingStation extends ProcessStation {
  category: string;
  curBin: Bin;
}
