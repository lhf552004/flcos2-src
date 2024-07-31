import { Injectable } from '@angular/core';
import {OpcServerService} from '../../shared/services/opc-server.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {OPCNodeList} from '../../shared/models/opc-node-list.model';
import {OpcNode} from '../../shared/models/opc-node.model';

@Injectable({
  providedIn: 'root'
})
export class OpcNodeResolverService {

  constructor(private opcServerService: OpcServerService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OpcNode> {
    const id = route.paramMap.get('opcNodeId');
    console.log(id);
    const nodeList = this.opcServerService.opcNodeList$.getValue();
    const nodeItem = this.opcServerService.getOPCNodeItem(id, nodeList.root);
    return this.opcServerService.getOPCNode(nodeItem.nodeId, nodeItem.nodeClass);
  }
}
