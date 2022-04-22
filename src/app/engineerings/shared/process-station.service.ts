import { Injectable } from '@angular/core';
import {EquipmentService} from './equipment.service';
import {Mixer} from './models/mixer.model';
import {ProcessStation} from './models/process-station.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessStationService extends EquipmentService<ProcessStation> {

  constructor(http: HttpClient) {
    super(http,
      environment.baseUrl + 'api/v1/process-stations',
      new BehaviorSubject<ProcessStation[]>([]));
  }
}
