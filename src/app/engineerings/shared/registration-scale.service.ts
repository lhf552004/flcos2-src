import {Injectable} from '@angular/core';
import {EquipmentService} from './equipment.service';
import {ProcessStation} from './models/process-station.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {RegistrationScale} from './models/registration-scale.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationScaleService extends EquipmentService<RegistrationScale> {

  constructor(http: HttpClient) {
    super(http,
      environment.baseUrl + 'api/v1/registration-scales',
      new BehaviorSubject<RegistrationScale[]>([]));
  }
}
