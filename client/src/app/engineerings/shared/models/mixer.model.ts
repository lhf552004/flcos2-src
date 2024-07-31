import {ProcessStation} from './process-station.model';

export interface Mixer extends ProcessStation {
  mixerType: string;
  capacityMin: number;
  capacityMax: number;
  weightMin: number;
  weightMax: number;
  mixTimePre: number;
  mixTime: number;
  mixTimePost: number;
  emptyDelay: number;
}
