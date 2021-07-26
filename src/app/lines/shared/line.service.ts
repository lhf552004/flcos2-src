import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Line } from './models/line.model';

@Injectable({
  providedIn: 'root'
})
export class LineService {

  lines: Line[] = [
    {
      id: '252558f9-c2a8-4f7d-b607-ff02dc1e6c4c',
      name: 'INT1',
      sections: [{
        id: '10ea3dfd-6e28-4b9e-9244-a2eba42bc15f',
        name: 'INT1-Section1'
      }]
    },
    {
      id: '5bcdc28b-fc29-4d4e-a6c3-e15866531989',
      name: 'INT2',
      sections: [{
        id: 'f5c17700-75ac-4a21-a4a9-d1aa4b347b40',
        name: 'INT2-Section1'
      }]
    },
    {
      id: '844660ac-7ec5-4819-887d-00dae25676e6',
      name: 'MIX1',
      sections: [{
        id: 'a61860c1-44a8-4cb3-b623-60dc2cf3a0bf',
        name: 'MIX1-MIXING'
      }, {
        id: 'e15fa296-cae4-4c03-808d-68f9bdf53148',
        name: 'MIX1-PACKING'
      }
      ]
    }
  ];

  constructor() { }

  getLines(): Observable<Line[]> {
    return of(this.lines);
  }

  getLine(id: string): Observable<Line> {
    return of(this.lines.find(l => l.id === id))
  }
}
