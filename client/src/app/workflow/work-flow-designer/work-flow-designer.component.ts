import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Vertex } from 'src/app/shared/workflow/models/vertex.model';
import { WorkflowSettings } from 'src/app/shared/workflow/models/workflow-settings.model';
import {Workflow} from '../../shared/workflow/models/workflow.model';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {IconDefinition, faExpandArrowsAlt, faCaretUp, faCaretDown} from '@fortawesome/free-solid-svg-icons';

declare var mxGraph: any;
declare var mxCell: any;
declare var mxGraphModel: any;
declare var mxHierarchicalLayout: any;
// declare var mxConstants: any;
// declare var mxEvent: any;
// declare var mxGeometry: any;
// declare var mxGraphView: any;
// declare var mxMouseEvent: any;
// declare var mxRectangle: any;
// declare var mxUtils: any;
// declare var mxPoint: any;

@Component({
  selector: 'flcos-work-flow-designer',
  templateUrl: './work-flow-designer.component.html',
  styleUrls: ['./work-flow-designer.component.scss']
})
export class WorkFlowDesignerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('graphContainer') graphContainer: ElementRef | undefined;

  faExpandArrowsAlt: IconDefinition = faExpandArrowsAlt;
  faCaretUp: IconDefinition = faCaretUp;
  faCaretDown: IconDefinition = faCaretDown;

  hideScopeOfWork = false;

  workflow: Workflow;

  graph: any;

  model: any;

  workflowSettings: WorkflowSettings;
  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.workflowSettings = new WorkflowSettings();
    this.workflowSettings.isEdited = true;
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe((data: {workflow: Workflow}) => {
      this.workflow = data.workflow;
    });
  }

  ngAfterViewInit(): void {
    const root = new mxCell();
    root.insert(new mxCell());

    this.model = new mxGraphModel(root);
    // @ts-ignore
    this.graph = new mxGraph(this.graphContainer.nativeElement, this.model);
    this.graph.setConnectable(true);
    const parent = this.graph.getDefaultParent();
    try {
      this.model.beginUpdate();
      const vertexes = new Map();
      this.workflow.vertexes.forEach(vertexData => {
        const vertex = this.graph.insertVertex(parent, vertexData.id, vertexData.name,
          vertexData.x, vertexData.y, vertexData.width, vertexData.height);
        vertexes.set(vertexData.id, vertex);
      });
      this.workflow.edges.forEach(edgeData => {
        const source = vertexes.has(edgeData.source) ? vertexes.get(edgeData.source) : null;
        const target = vertexes.has(edgeData.target) ? vertexes.get(edgeData.target) : null;
        this.graph.insertEdge(parent, edgeData.id, edgeData.name, source, target);
      });

    } finally {
      this.model.endUpdate();
      new mxHierarchicalLayout(this.graph).execute(this.graph.getDefaultParent());
    }
  }

  addRectangle() {
    const parent = this.graph.getDefaultParent();
    try {
      this.model.beginUpdate();
      const vertex = this.graph.insertVertex(parent, '222', 'Test',
        100, 100, 200, 80);

    } finally {
      this.model.endUpdate();
    }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
