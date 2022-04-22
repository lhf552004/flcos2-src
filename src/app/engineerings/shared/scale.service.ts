import {Injectable} from '@angular/core';
import {EquipmentService} from './equipment.service';
import {RegistrationScale} from './models/registration-scale.model';
import {Scale} from './models/scale.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScaleService extends EquipmentService<Scale> {

  constructor(http: HttpClient) {
    super(http,
      environment.baseUrl + 'api/v1/scales',
      new BehaviorSubject<Scale[]>([]));
  }
}
