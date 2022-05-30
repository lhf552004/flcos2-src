import {Injectable} from '@angular/core';
import {GenericBaseService} from '../../shared/services/generic-base.service';
import {Job} from '../../shared/models/job.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

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

  scanBatchNumber(id: string, batchNumber: string): Observable<any> {
    const url = `${this.url}/${id}/scan/${batchNumber}`;
    return this.http.get<any>(url);
  }
}
