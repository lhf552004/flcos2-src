import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from './models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobs: Job[] = [
    {
      id: '821c6f60-c7b5-4090-ad6a-0cd25cd4cdfb',
      name: 'INT1:000001',
      lineId: '252558f9-c2a8-4f7d-b607-ff02dc1e6c4c',
      lineName: 'INT1',
      actualWeight: 3000,
      targetWeight: 3100,
      state: 'created'
    },
    {
      id: '6e386b40-9684-4ebd-be32-8f4d8ddcb650',
      name: 'INT2:000001',
      lineId: '5bcdc28b-fc29-4d4e-a6c3-e15866531989',
      lineName: 'INT2',
      actualWeight: 5000,
      targetWeight: 5100,
      state: 'created'
    },
    {
      id: 'e7dcecae-b6b7-486f-b9df-e6e638d4e98b',
      name: 'MIX1:000001',
      lineId: '844660ac-7ec5-4819-887d-00dae25676e6',
      lineName: 'MIX1',
      actualWeight: 3000,
      targetWeight: 3100,
      state: 'created',
      bom: {id: 'ffbdd6c6-0b1f-47c5-8316-c8aa60f4e082', name: '', isTemplate: false, ingredents: [{
        id: 'c3587775-4188-42f1-a9b2-7045b2013804',
        name: '',
        materialId: '821c6f60-c7b5-4090-ad6a-0cd25cd4cdfb',
        materialName: 'Corn',
        targetWeight: 0,
        actualWeight: 0,
        percent: .75
      },
      {
        id: 'd657f387-2b40-4c98-89cd-6fdf30f81d1e',
        name: '',
        materialId: '0bd3f335-2fbe-4bb6-ac59-22baecf8afe8',
        materialName: 'Vitamin C',
        targetWeight: 0,
        actualWeight: 0,
        percent: .05
      },
      {
        id: '2dac15cf-9192-4b4b-a206-48541b664980',
        name: '',
        materialId: '799d0452-40f9-4089-8611-02344e878941',
        materialName: 'Vitamin D',
        targetWeight: 0,
        actualWeight: 0,
        percent: .05
      },
      {
        id: '1eef7c9d-286c-4bae-bd95-c55dd9692a15',
        name: '',
        materialId: 'fdcacb5c-89fc-424a-9554-0c78612e708e',
        materialName: 'Niacin',
        targetWeight: 0,
        actualWeight: 0,
        percent: .15
      }
      
    ]}
    }
  ];

  constructor() { }

  getJob(id: string): Observable<Job> {
    return of(this.jobs.find(j => j.id === id));
  }

  getJobs(lineId: string): Observable<Job[]> {
    return of(this.jobs.filter(j => j.lineId === lineId));
  }
}