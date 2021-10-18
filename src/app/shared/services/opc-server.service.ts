import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {OPCNodeList} from '../models/opc-node-list.model';
import {tap} from 'rxjs/operators';
import {OpcNodeItem} from '../models/opc-node-item.model';
import {OpcVariableValues} from '../models/opc-variable-values.model';
import {OpcNode} from '../models/opc-node.model';

@Injectable({
  providedIn: 'root'
})
export class OpcServerService {
  private opcServerUrl = environment.baseUrl + 'api/v1/opc-ua';
  opcNodeList$: BehaviorSubject<OPCNodeList | null> = new BehaviorSubject<OPCNodeList | null>(null);
  endpointUrls$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  endpointUrl$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  opcNodeVariableValues$: BehaviorSubject<OpcVariableValues> = new BehaviorSubject<OpcVariableValues>({rollerBeds: {}});

  constructor(private http: HttpClient) {
  }

  getEndpointUrls(): Observable<string[]> {
    const url = `${this.opcServerUrl}/endpointurls`;
    return this.http.get<string[]>(url).pipe(tap(x => {
      this.endpointUrls$.next(x);
    }));
  }

  selectEndpoint(index: number) {

  }

  getNodeList(): Observable<OPCNodeList> {
    const url = `${this.opcServerUrl}/nodes`;
    return this.http.get<OPCNodeList>(url).pipe(tap(x => {
      this.opcNodeList$.next(x);
    }));
  }

  getOPCNode(nodeId: string, nodeClass: string): Observable<OpcNode> {
    const url = `${this.opcServerUrl}/node`;
    // TODO: multi opc client
    const endpointUrl = this.endpointUrls$.getValue()[0];
    const payload = {nodeId, nodeClass, endpointUrl};
    return this.http.post<OpcNode>(url, payload);
  }

  writeVariableNode(nodeId: string, newValue: string): Observable<any> {
    const url = `${this.opcServerUrl}/write`;
    // TODO: multi opc client
    const endpointUrl = this.endpointUrls$.getValue()[0];
    const payload = {nodeIds: [nodeId], values: [newValue], endpointUrl};
    return this.http.post<any>(url, payload);
  }

  getOPCNodeItem(nodeId: string, opcNodeItem: OpcNodeItem) {
    let theNode: OpcNodeItem | null = null;
    if (opcNodeItem.id === nodeId) {
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

  getOPCVariableNodeValues(): Observable<OpcVariableValues> {
    const url = `${this.opcServerUrl}/variables`;
    return this.http.get<any>(url).pipe(tap(x => {
      const variableValues = this.opcNodeVariableValues$.getValue();
      variableValues.rollerBeds = x;
      this.opcNodeVariableValues$.next(variableValues);
    }));
  }

  updateVariableNodeValue(nodeId: string, newValue: object) {
    const variableNodeValues = this.opcNodeVariableValues$.getValue();
    variableNodeValues.rollerBeds[nodeId] = newValue;
    this.opcNodeVariableValues$.next(variableNodeValues);
  }

}
