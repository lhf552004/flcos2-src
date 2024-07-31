import {Injectable} from '@angular/core';
import {GenericBaseService} from '../../shared/services/generic-base.service';
import {Job} from '../../shared/models/job.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Message} from '../../shared/models/message-model';

@Injectable({
  providedIn: 'root'
})
export class JobService extends GenericBaseService<Job> {

  constructor(http: HttpClient) {
    super(http,
      'api/v1/jobs'
    );
  }

  getAllByLine(lineId: string): Observable<Job[]> {
    const url = `${this.url}/line/${lineId}`;
    return this.http.get<Job[]>(url).pipe(tap(l => {
      this.objects$.next(l);
    }));
  }

  scanBatchNumber(id: string, batchNumber: string): Observable<Message> {
    const url = `${this.url}/${id}/scan/${batchNumber}`;
    return this.http.get<any>(url).pipe(tap(x => {
      const job = this.object$.getValue();
      if (job.status === 'Created') {
        job.status = 'Running';
      }
      this.object$.next(job);
    }));
  }

  start(id: string): Observable<any> {
    const url = `${this.url}/start/${id}`;
    return this.http.put<any>(url, null);
  }

  pause(id: string): Observable<any> {
    const url = `${this.url}/pause/${id}`;
    return this.http.put<any>(url, null);
  }

  stop(id: string): Observable<any> {
    const url = `${this.url}/stop/${id}`;
    return this.http.put<any>(url, null);
  }
}
