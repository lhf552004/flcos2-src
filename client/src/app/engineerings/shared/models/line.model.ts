import {Section} from './section.model';

export class Line {
    id: string;
    name: string;
    status: string;
    isProduction: boolean;
    sections: Section[];
}
