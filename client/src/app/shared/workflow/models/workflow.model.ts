import {Edge} from './edge.model';
import {Vertex} from './vertex.model';

export class Workflow {
  id: string;
  name: string;
  edges: Edge[];
  vertexes: Vertex[];
}
