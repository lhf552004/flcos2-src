import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {Discharger} from './models/discharger.model';
import {EquipmentService} from './equipment.service';
import {Filler} from './models/filler.model';

@Injectable({
  providedIn: 'root'
})
export class FillerService extends EquipmentService<Filler> {

  constructor(http: HttpClient) {
    super(http,
      environment.baseUrl + 'api/v1/fillers',
      new BehaviorSubject<Filler[]>([]));
  }
}
