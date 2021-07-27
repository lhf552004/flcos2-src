import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {WorkflowService} from '../shared/workflow.service';
import {Workflow} from '../../shared/workflow/models/workflow.model';

@Injectable({
  providedIn: 'root'
})
export class WorkflowResolverService {

  constructor(private workflowService: WorkflowService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Workflow> {
    const id = route.paramMap.get('workflowId');
    return this.workflowService.getWorkflow(id);
  }
}
