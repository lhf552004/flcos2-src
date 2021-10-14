import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {OPCNodeList} from '../models/opc-node-list.model';
import {tap} from 'rxjs/operators';
import {OpcNodeItem} from '../models/opc-node-item.model';

@Injectable({
  providedIn: 'root'
})
export class OpcServerService {
  private opcServerUrl = environment.baseUrl + 'api/v1/opc-ua';
  opcNodeList$: BehaviorSubject<OPCNodeList | null> = new BehaviorSubject<OPCNodeList | null>(null);
  endpointUrl$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
  }

  getEndpointUrls(): Observable<string[]> {
    const url = `${this.opcServerUrl}/endpointurls`;
    return this.http.get<string[]>(url);
  }

  selectEndpoint(index: number) {

  }

  getNodeList(endpointUrl: string): Observable<OPCNodeList> {
    const url = `${this.opcServerUrl}/nodes`;
    const payload = {endpointUrl};
    return this.http.post<OPCNodeList>(url, payload).pipe(tap(x => {
      this.opcNodeList$.next(x);
    }));
  }

  getOPCNode(nodeId: string, nodeClass: string, endpointUrl: string): Observable<OPCNodeList> {
    const url = `${this.opcServerUrl}/node`;
    const payload = {nodeId, nodeClass, endpointUrl};
    return this.http.post<OPCNodeList>(url, payload);
  }

  getOPCNodeItem(nodeId: string, opcNodeItem: OpcNodeItem) {
    let theNode: OpcNodeItem | null = null;
    if (opcNodeItem.nodeId === nodeId) {
      theNode = opcNodeItem;
    } else {
      let i = 0;
      const length = opcNodeItem.children ? opcNodeItem.children.length : 0;
      while (i < length) {
        const curNode = opcNodeItem.children[i];
        const existed = this.getOPCNodeItem(nodeId, curNode);
        if (existed) {
          theNode = existed;
          break;
        }
        i++;
      }
    }
    return theNode;
  }
}
