import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Equipment } from './models/equipment.model';
import { Section } from './models/section.model';


@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  sections: Section[] = [
    {
      id: '10ea3dfd-6e28-4b9e-9244-a2eba42bc15f', name: 'INT1-Section1', equipments: [
        { id: '1c2fbab8-80de-40a6-beba-418484eb2ef3', name: 'Discharger1', type: 'discharger' }]
    },
    { id: 'f5c17700-75ac-4a21-a4a9-d1aa4b347b40', name: 'INT2-Section1', equipments: [{ id: 'd763bcbe-39d7-44d4-81c3-390dfe899a81', name: 'Discharger2', type: 'discharger' }] },
    {
      id: 'a61860c1-44a8-4cb3-b623-60dc2cf3a123',
      name: 'MIX1-DISCHARGING',
      equipments: []
    },
    { id: 'a61860c1-44a8-4cb3-b623-60dc2cf3a0bf', name: 'MIX1-MIXING', equipments: [{ id: '8e8e45cb-9dc3-493b-a729-73a23808df3e', name: 'Mixer1', type: 'mixer' }] },
    { id: 'e15fa296-cae4-4c03-808d-68f9bdf53148', name: 'MIX1-PACKING', equipments: [{ id: '6c713110-9748-45e5-b096-81530e292915', name: 'Packer2', type: 'packer' }] }
  ];

  equipments: Equipment[] = [
    { id: '1c2fbab8-80de-40a6-beba-418484eb2ef3', name: 'Discharger1', type: 'discharger' },
    { id: 'd763bcbe-39d7-44d4-81c3-390dfe899a81', name: 'Discharger2', type: 'discharger' },
    { id: '8e8e45cb-9dc3-493b-a729-73a23808df3e', name: 'Mixer1', type: 'mixer' },
    { id: '1b1256f7-41b2-4707-889b-26d79ec25ebd', name: 'Packer1', type: 'packer' },
    { id: '6c713110-9748-45e5-b096-81530e292915', name: 'Packer2', type: 'packer' }
  ];

  constructor() { }

  getEquipments(): Observable<Equipment[]> {
    return of(this.equipments);
  }

  getEquipment(id: string): Observable<Equipment> {
    return of(this.equipments.find(e => e.id === id));
  }

  getSections(): Observable<Section[]> {
    return of(this.sections);
  }

  getSection(id: string): Observable<Section> {
    return of(this.sections.find(s => s.id === id));
  }
}
