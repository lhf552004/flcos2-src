import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProcessVariableService} from '../shared/process-variable.service';
import {ProcessVariable} from '../shared/models/process-variable.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessVariablesResolverService {

  constructor(private processVariableService: ProcessVariableService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProcessVariable[]> {
    return this.processVariableService.getAll();
  }
}
