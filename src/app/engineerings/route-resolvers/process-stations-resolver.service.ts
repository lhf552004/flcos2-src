import { Injectable } from '@angular/core';
import {MixerService} from '../shared/mixer.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Mixer} from '../shared/models/mixer.model';
import {ProcessStationService} from '../shared/process-station.service';
import {ProcessStation} from '../shared/models/process-station.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessStationsResolverService {

  constructor(private processStationService: ProcessStationService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProcessStation[]> {
    return this.processStationService.getAll();
  }
}
