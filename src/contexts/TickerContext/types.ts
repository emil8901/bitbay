export interface IState {
  spread: string | null;
}

interface IWsResMessage {
  market: {
    code: string;
    first: {
      currency: string;
      minOffer: string;
      scale: number;
    };
    second: {
      currency: string;
      minOffer: string;
      scale: number;
    };
  };
  time: string;
  highestBid: string;
  lowestAsk: string;
  rate: string;
  previousRate: string;
}

export interface IWsRes {
  action: string;
  message: IWsResMessage;
  seqNo: number;
  timestamp: string;
  topic: string;
}
