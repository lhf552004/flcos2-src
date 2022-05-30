import { Injectable } from '@angular/core';
import {BinService} from '../../bins/shared/bin.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Bin} from '../../bins/shared/models/bin.model';
import {JobService} from '../shared/job.service';
import {Job} from '../../shared/models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobsResolverService {

  constructor(private jobService: JobService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Job[]> {
    const lineId = route.paramMap.get('lineId');
    return this.jobService.getAllByLine(lineId as string);
  }
}
