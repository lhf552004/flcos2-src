import {Injectable} from '@angular/core';
import {GenericBaseService} from '../../shared/services/generic-base.service';
import {Job} from './models/job.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService extends GenericBaseService<Job> {

  constructor(http: HttpClient) {
    super(http,
      environment.baseUrl + 'api/v1/jobs',
      new BehaviorSubject<Job[]>([]));
  }
}
