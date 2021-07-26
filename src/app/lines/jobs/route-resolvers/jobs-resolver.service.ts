import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Job } from '../shared/models/job.model';
import { JobService } from '../shared/job.service';

@Injectable({
  providedIn: 'root'
})
export class JobsResolverService {

  constructor(private jobService: JobService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Job[]> {
    const lineId = route.parent.parent.paramMap.get('lineId');
    return this.jobService.getJobs(lineId);
  }
}
