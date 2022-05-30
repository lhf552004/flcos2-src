import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {JobService} from '../shared/job.service';
import {Job} from '../../shared/models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobsResolverService {

  constructor(private jobService: JobService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Job[]> {
    const lineId = route.parent.paramMap.get('lineId');
    return this.jobService.getAllByLine(lineId as string);
  }
}
