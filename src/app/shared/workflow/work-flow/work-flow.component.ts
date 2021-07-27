import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {WorkflowSettings} from '../models/workflow-settings.model';
import {Vertex} from '../models/vertex.model';

declare var mxGraph: any;
declare var mxCell: any;
declare var mxGraphModel: any;
declare var mxHierarchicalLayout: any;

@Component({
  selector: 'emes-work-flow',
  templateUrl: './work-flow.component.html',
  styleUrls: ['./work-flow.component.scss']
})
export class WorkFlowComponent implements OnInit, AfterViewInit {
  @ViewChild('graphContainer') graphContainer: ElementRef | undefined;

  @Input() workflowSettings: WorkflowSettings;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    const root = new mxCell();
    root.insert(new mxCell());

    const model = new mxGraphModel(root);
    // @ts-ignore
    const graph = new mxGraph(this.graphContainer.nativeElement, model);
    graph.setConnectable(true);
    const parent = graph.getDefaultParent();
    try {
      model.beginUpdate();
      const vertexes = new Map();
      this.workflowSettings.workflow.vertexes.forEach(vertexData => {
        const vertex = graph.insertVertex(parent, vertexData.id, vertexData.name,
          vertexData.x, vertexData.y, vertexData.width, vertexData.height);
        vertexes.set(vertexData.id, vertex);
      });
      this.workflowSettings.workflow.edges.forEach(edgeData => {
        const source = vertexes.has(edgeData.source) ? vertexes.get(edgeData.source) : null;
        const target = vertexes.has(edgeData.target) ? vertexes.get(edgeData.target) : null;
        graph.insertEdge(parent, edgeData.id, edgeData.name, source, target);
      });

    } finally {
      model.endUpdate();
      new mxHierarchicalLayout(graph).execute(graph.getDefaultParent());
    }
  }

}
