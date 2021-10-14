export interface OpcNodeItem {
  nodeId: string;
  name: string;
  nodeClass: string;
  children: OpcNodeItem[];
}
