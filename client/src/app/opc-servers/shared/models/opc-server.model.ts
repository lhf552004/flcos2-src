
export interface OPCServer {
  id: string;
  name: string;
  status: string;
  address: string;
  internal: boolean;
  tcpPort: number;
  httpsPort: number;
}
