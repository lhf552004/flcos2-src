import {Injectable} from '@angular/core';
import {EquipmentService} from './equipment.service';
import {Filler} from './models/filler.model';
import {Mixer} from './models/mixer.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MixerService extends EquipmentService<Mixer> {

  constructor(http: HttpClient) {
    super(http,
      environment.baseUrl + 'api/v1/mixers',
      new BehaviorSubject<Mixer[]>([]));
  }
}
