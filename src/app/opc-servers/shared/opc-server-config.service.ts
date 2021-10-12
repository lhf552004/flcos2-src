import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Order} from '../../orders/shared/models/order.model';
import {tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {OPCServer} from './models/opc-server.model';

@Injectable({
  providedIn: 'root'
})
export class OpcServerConfigService {
  private opcConfigUrl = environment.baseUrl + 'api/v1/opc-configs';
  opcServers$: BehaviorSubject<OPCServer[]> = new BehaviorSubject<OPCServer[]>([]);
  opcServer$: BehaviorSubject<OPCServer | null> = new BehaviorSubject<OPCServer | null>(null);

  opcServers: OPCServer[] = [
    {
      id: '1',
      name: 'OPC 1',
      endpointUrl: 'opc.tcp://localhost:12686/milo',
      status: 'Running'
    }
  ];

  constructor(private http: HttpClient) {
  }

  get(id: string): Observable<OPCServer> {
    const opcServer = this.opcServers.find(o => o.id === id);
    this.opcServer$.next(opcServer);
    return of(opcServer);
    // const url = `${this.opcConfigUrl}/${id}`;
    // return this.http.get<OPCServer>(url).pipe(tap(x => {
    //   this.opcServer$.next(x);
    // }));
  }

  getAll(page: number, size: number): Observable<OPCServer[]> {
    this.opcServers$.next(this.opcServers);
    return of(this.opcServers);
    // const url = `${this.opcConfigUrl}`;
    // return this.http.get<OPCServer[]>(url).pipe(tap(x => {
    //   this.opcServers$.next(x);
    // }));
  }

  create(opcServer: OPCServer): Observable<any> {
    const url = `${this.opcConfigUrl}`;
    return this.http.post(url, opcServer).pipe(tap(x => {
      const opcServers = this.opcServers$.getValue();
      opcServers.push({...opcServer, id: x});
      this.opcServers$.next(opcServers);
    }));
  }

  update(id: string, opcServer: OPCServer): Observable<any> {
    const url = `${this.opcConfigUrl}/${id}`;
    return this.http.put(url, opcServer).pipe(tap(x => {
      const opcServers = this.opcServers$.getValue();
      let existed = opcServers.find(o => o.id === id);
      if (existed) {
        existed = {...opcServer};
      }
      this.opcServers$.next(opcServers);
    }));
  }

  delete(id: string): Observable<any> {
    const url = `${this.opcConfigUrl}/${id}`;
    return this.http.delete(url).pipe(tap(x => {
      const opcServers = this.opcServers$.getValue();
      const idx = opcServers.findIndex(o => o.id === id);
      if (idx > -1) {
        opcServers.splice(idx, 1);
      }
      this.opcServers$.next(opcServers);
    }));
  }
}
