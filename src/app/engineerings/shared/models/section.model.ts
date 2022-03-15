import { Equipment } from './equipment.model';

export class Section {
    id: string;
    index: number;
    name: string;
    opcVariableIdent?: string;
    equipments: Equipment[];
}
