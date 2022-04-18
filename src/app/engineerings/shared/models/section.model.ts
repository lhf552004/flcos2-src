import {Equipment} from './equipment.model';
import {Line} from './line.model';

export class Section {
  id: string;
  index: number;
  name: string;
  status: string;
  isManual: boolean;
  isHold: boolean;
  line: { id: string, name: string };
  job: any;
  opcVariableIdent?: string;
  equipments: Equipment[];

}
