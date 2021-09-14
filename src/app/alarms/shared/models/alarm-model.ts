export interface Alarm {
  id: string;
  start: string;
  duration: string;
  end?: string;
  messageType: string;
  message: string;
  type: string;
  group: string;
  plc: string;
  plcName: string;
  panelArea: string;
  cabinet: string;
  deviceName: string;
  deviceDescription: string;
  asset: string
}
