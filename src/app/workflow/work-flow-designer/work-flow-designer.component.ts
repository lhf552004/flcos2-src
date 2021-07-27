import {Component, OnDestroy, OnInit} from '@angular/core';
import { Vertex } from 'src/app/shared/workflow/models/vertex.model';
import { WorkflowSettings } from 'src/app/shared/workflow/models/workflow-settings.model';
import {Workflow} from '../../shared/workflow/models/workflow.model';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';

@Component({
  selector: 'emes-work-flow-designer',
  templateUrl: './work-flow-designer.component.html',
  styleUrls: ['./work-flow-designer.component.scss']
})
export class WorkFlowDesignerComponent implements OnInit, OnDestroy {

  workflow: Workflow;

  workflowSettings: WorkflowSettings;
  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.workflowSettings = new WorkflowSettings();
    this.workflowSettings.isEdited = true;
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe((data: {workflow: Workflow}) => {
      this.workflow = data.workflow;
      this.workflowSettings.workflow = this.workflow;
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
