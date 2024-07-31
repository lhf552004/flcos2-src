export interface OpcNodeItem {
  id: string;
  nodeId: string;
  name: string;
  nodeClass: string;
  children: OpcNodeItem[];
}
