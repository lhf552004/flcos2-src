import { Injectable } from '@angular/core';
import {OpcServerService} from '../../shared/services/opc-server.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {OPCNodeList} from '../../shared/models/opc-node-list.model';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpcNodeListResolverService {

  constructor(private opcServerService: OpcServerService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OPCNodeList> {
    this.opcServerService.getEndpointUrls().subscribe();
    return this.opcServerService.getNodeList();
  }
}
