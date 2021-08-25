import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Line} from '../shared/models/line.model';
import {WorkflowSettings} from '../../shared/workflow/models/workflow-settings.model';
import {Vertex} from '../../shared/workflow/models/vertex.model';
import {Workflow} from '../../shared/workflow/models/workflow.model';
import {Section} from '../shared/models/section.model';

@Component({
  selector: 'emes-line-default',
  templateUrl: './line-default.component.html',
  styleUrls: ['./line-default.component.scss']
})
export class LineDefaultComponent implements OnInit, OnDestroy {

  // Current line
  line: Line;
  sections: Section[];
  // Svg file path
  svg: string;

  workflowSettings: WorkflowSettings = new WorkflowSettings();

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.workflowSettings.isEdited = true;
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe((data: { line: Line }) => {
      this.line = data.line;

      this.sections = data.line.sections.map((section, index, array) => {
        return {
          id: section.id,
          name: section.name,
          isActive: true,
          jobName: this.line.name + ':00000' + (index + 1)
        };
      });

      // const workflow = new Workflow();
      // let yAix = 0;
      // const diff = 50;
      // workflow.vertexes = this.line.sections.map(section => {
      //   yAix = yAix + diff;
      //   return {
      //     id: section.id,
      //     name: section.name,
      //     width: 200,
      //     height: 80,
      //     x: 100,
      //     y: yAix,
      //     style: 'red'
      //   };
      // });
      // workflow.edges = workflow.vertexes.map((vertex, index, array) => {
      //   if (index + 1 < array.length) {
      //     return {
      //       id: index.toString(),
      //       name: '',
      //       source: vertex.id,
      //       target: array[index + 1].id,
      //       style: ''
      //     };
      //   }
      // }).filter(edge => edge);
      // this.workflowSettings.workflow = workflow;
      // this.svg = 'assets/svgs/' + this.line.name + '.svg';
      console.log(this.line);
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
