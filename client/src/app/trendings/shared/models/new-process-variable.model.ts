export interface NewProcessVariable {
  variableName: string;
  highHigh: number;
  high: number;
  low: number;
  lowLow: number;
  plc?: string;
  device?: string;
  type: string;
}
