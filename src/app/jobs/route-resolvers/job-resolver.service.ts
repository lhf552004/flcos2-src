import { Injectable } from '@angular/core';
import {JobService} from '../shared/job.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Job} from '../../shared/models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobResolverService {

  constructor(private jobService: JobService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Job> {
    const jobId = route.paramMap.get('jobId');
    return this.jobService.get(jobId);
  }
}
