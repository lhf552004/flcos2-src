import { Bom } from './bom.model';

export class Job {
    id: string;
    name: string;
    lineId: string;
    lineName: string;
    targetWeight: number;
    actualWeight: number;
    state: string;
    bom?: Bom;
}