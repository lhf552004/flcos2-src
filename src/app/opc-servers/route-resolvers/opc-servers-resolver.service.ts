import { Injectable } from '@angular/core';
import {OpcServerConfigService} from '../shared/opc-server-config.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {OPCServer} from '../shared/models/opc-server.model';

@Injectable({
  providedIn: 'root'
})
export class OpcServersResolverService {

  constructor(private opcServerConfigService: OpcServerConfigService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OPCServer[]> {
    return this.opcServerConfigService.getAll(0, 50);
  }
}
