import React, { createContext, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";
import { EntryTypes, IState, IWsRes } from "./types";

const initialState: IState = {
  buyOrder: [],
  sellOrder: [],
};

export const OrderBookContext = createContext<IState>(initialState);

const OrderBookProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<IState>(initialState);
  const { state: websocketPath } = useContext(GlobalContext);

  useEffect(() => {
    const websocket = new WebSocket(process.env.REACT_APP_WS_PATH);

    websocket.onopen = () => {
      const msg = {
        action: "subscribe-public",
        module: "trading",
        path: `orderbook/${websocketPath}`,
      };

      setState(initialState);

      websocket.send(JSON.stringify(msg));
    };

    websocket.onmessage = (event) => {
      const data: IWsRes = JSON.parse(event.data);

      if (data.action !== "push") return;

      const [{ entryType }] = data.message.changes;

      switch (entryType) {
        case EntryTypes.BUY:
          setState((prevState) => {
            const buyOrderTemp = prevState.buyOrder.slice();
            buyOrderTemp.unshift(...data.message.changes);

            return {
              ...prevState,
              buyOrder: buyOrderTemp,
            };
          });
          break;
        case EntryTypes.SELL:
          setState((prevState) => {
            const sellOrderTemp = prevState.sellOrder.slice();
            sellOrderTemp.unshift(...data.message.changes);

            return {
              ...prevState,
              sellOrder: sellOrderTemp,
            };
          });
          break;
        default:
          break;
      }
    };

    return () => {
      const msg = {
        action: "unsubscribe",
        module: "trading",
        path: `orderbook/${websocketPath}`,
      };

      websocket.send(JSON.stringify(msg));
      websocket.close();
    };
  }, [websocketPath]);

  return (
    <OrderBookContext.Provider value={state}>
      {children}
    </OrderBookContext.Provider>
  );
};

export default OrderBookProvider;
