import {Injectable} from '@angular/core';
import {EquipmentService} from './equipment.service';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {ConveyingStation} from './models/conveying-station.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConveyingStationService extends EquipmentService<ConveyingStation> {

  constructor(http: HttpClient) {
    super(http,
      environment.baseUrl + 'api/v1/conveying-stations',
      new BehaviorSubject<ConveyingStation[]>([]));
  }
}
