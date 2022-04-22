import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {ConveyingStation} from './models/conveying-station.model';
import {EquipmentService} from './equipment.service';
import {Discharger} from './models/discharger.model';

@Injectable({
  providedIn: 'root'
})
export class DischargerService extends EquipmentService<Discharger>{

  constructor(http: HttpClient) {
    super(http,
      environment.baseUrl + 'api/v1/dischargers',
      new BehaviorSubject<Discharger[]>([]));
  }
}
