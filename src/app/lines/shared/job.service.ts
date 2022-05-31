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
      'api/v1/jobs');
  }

  getAllByLine(lineId: string): Observable<Job[]> {
    const url = `${this.url}/line/${lineId}`;
    return this.http.get<Job[]>(url).pipe(tap(l => {
      this.objects$.next(l);
    }));
  }

  create(newObject: Job, defaultParameter: any): Observable<any> {
    const url = `${this.url}`;
    return this.http.post<any>(url, newObject).pipe(tap(x => {
      const objects = this.objects$.getValue();
      objects.push({...newObject, id: x, name: newObject.line.name + ':' + x, ...defaultParameter});
      this.objects$.next(objects);
    }));
  }
}
