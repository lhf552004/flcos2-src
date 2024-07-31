import { Injectable } from '@angular/core';
import {FillerService} from '../shared/filler.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Filler} from '../shared/models/filler.model';
import {MixerService} from '../shared/mixer.service';
import {Mixer} from '../shared/models/mixer.model';

@Injectable({
  providedIn: 'root'
})
export class MixersResolverService {
  constructor(private mixerService: MixerService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Mixer[]> {
    return this.mixerService.getAll();
  }
}
