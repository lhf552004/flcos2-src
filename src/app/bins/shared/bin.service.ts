import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bin } from './models/bin.model';

@Injectable({
  providedIn: 'root'
})
export class BinService {

  bins: Bin[] = [
    { id: 'd4ddfdf1-8660-43d9-aa8c-479a581ad5e7', name: 'Bin1', type: 'bulk' },
    { id: 'bfc287e6-b90d-4c66-8f3f-aba567e621bf', name: 'Bin2', type: 'bulk' },
    { id: 'dd37e65b-0d88-4ad7-8419-51376ff5100f', name: 'Bin3', type: 'bulk' },
    { id: 'ad897cd2-247f-421c-b1f9-5604ab2b61d8', name: 'Bin4', type: 'bulk' },
    { id: '65eb3583-ffd2-44c9-adb3-f59d17a5c370', name: 'Bin5', type: 'bulk' },
    { id: '5c1549fc-7ac0-4de9-8b10-e8b7b3f24227', name: 'Bin6', type: 'bulk' }
  ];
  constructor() { }

  getBins(): Observable<Bin[]> {
    return of(this.bins);
  }

  getBin(id: string): Observable<Bin> {
    return of(this.bins.find(b => b.id === id));
  }

}
