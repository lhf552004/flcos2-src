import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {OpcServerConfigService} from '../shared/opc-server-config.service';
import {OPCServer} from '../shared/models/opc-server.model';

@Injectable({
  providedIn: 'root'
})
export class OpcServerResolverService {

  constructor(private opcServerConfigService: OpcServerConfigService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OPCServer> {
    const id = route.paramMap.get('opcServerId');
    return this.opcServerConfigService.get(id as string);
  }
}
