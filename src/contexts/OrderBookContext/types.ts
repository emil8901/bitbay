export enum EntryTypes {
  BUY = "Buy",
  SELL = "Sell",
}

export interface IState {
  buyOrder: IWsResChanges[];
  sellOrder: IWsResChanges[];
}

interface IWsResChanges {
  action: string;
  entryType: EntryTypes;
  marketCode: string;
  rate: string;
  state: { ca: string; co: number; pa: string; ra: string; sa: string };
}

interface IWsResMessage {
  changes: IWsResChanges[];
  timestamp: string;
}

export interface IWsRes {
  action: string;
  message: IWsResMessage;
  seqNo: number;
  timestamp: string;
  topic: string;
}
