export interface OpcNode {
  nodeId: string;
  name: string;
  nodeClass: string;
  browseName: string;
  displayName: string;
  description: string;
  writeMask: string;
  userWriteMask: string;
  value: string;
  dataType: string;
  accessLevel: string;
  userAccessLevel: string;
}
