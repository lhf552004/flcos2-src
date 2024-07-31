import {BehaviorSubject, Observable} from 'rxjs';
import {SimpleBase} from '../models/simple-base.model';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

export abstract class SimpleBaseService {
  private baseUrl = environment.baseUrl;
  protected readonly url;
  protected readonly http: HttpClient;
  public readonly simpleObjects$: BehaviorSubject<SimpleBase[]> = new BehaviorSubject<SimpleBase[]>([]);

  protected constructor(http: HttpClient, relativeUrl: string) {
    this.http = http;
    this.url = this.baseUrl + relativeUrl;
  }

  // Get the all list
  getSimpleAll(): Observable<SimpleBase[]> {
    const url = `${this.url}/simple-all`;
    return this.http.get<SimpleBase[]>(url).pipe(tap(l => {
      this.simpleObjects$.next(l);
    }));
  }
}
