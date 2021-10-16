export interface IState {
  min24: string | null;
  max24: string | null;
}

interface IWsResMessage {
  m: string;
  h: number;
  l: number;
  v: number;
  r24h: number;
}

export interface IWsRes {
  action: string;
  message: IWsResMessage[];
  seqNo: number;
  timestamp: string;
  topic: string;
}
