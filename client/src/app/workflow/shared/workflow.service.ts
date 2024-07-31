import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Workflow } from 'src/app/shared/workflow/models/workflow.model';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {
  workflows: Workflow[] = [{
    id: '1',
    name: 'standard run',
    vertexes: [
      {
        id: '1',
        name: '入涂装',
        width: 200,
        height: 80,
        x: 0,
        y: 0,
        style: ''
      },
      {
        id: '2',
        name: 'PVC线',
        width: 200,
        height: 80,
        x: 0,
        y: 0,
        style: ''
      },
    ],
    edges: [
      {
        id: '1',
        name: '',
        source: '1',
        target: '2',
        style: ''
      }
    ]
  }];
  constructor() { }

  getWorkflows(): Observable<Workflow[]> {
    return of(this.workflows);
  }

  getWorkflow(id: string): Observable<Workflow> {
    return of(this.workflows.find(w => w.id === id));
  }
}
