import {Injectable} from '@angular/core';
import {GenericBaseService} from '../../shared/services/generic-base.service';
import {Job} from './models/job.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService extends GenericBaseService<Job> {

  constructor(http: HttpClient) {
    super(http,
      environment.baseUrl + 'api/v1/jobs');
  }

  getAllByLine(lineId: string): Observable<Job[]> {
    const url = `${this.url}/line/${lineId}`;
    return this.http.get<Job[]>(url).pipe(tap(l => {
      this.objects$.next(l);
    }));
  }
}
