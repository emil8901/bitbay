import React, { createContext, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";
import { IState, IWsRes } from "./types";

const initialState: IState = {
  spread: null,
};

export const TickerContext = createContext<IState>(initialState);

const TickerProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<IState>(initialState);
  const { state: websocketPath } = useContext(GlobalContext);

  useEffect(() => {
    const websocket = new WebSocket(process.env.REACT_APP_WS_PATH);

    websocket.onopen = () => {
      const msg = {
        action: "subscribe-public",
        module: "trading",
        path: `ticker/${websocketPath}`,
      };

      setState(initialState);

      websocket.send(JSON.stringify(msg));
    };

    websocket.onmessage = (event) => {
      const data: IWsRes = JSON.parse(event.data);

      if (data.action !== "push") return;

      const {
        message: { highestBid, lowestAsk },
      } = data;

      const spread = (parseFloat(lowestAsk) - parseFloat(highestBid)).toFixed(
        2
      );

      setState({
        spread,
      });
    };

    return () => {
      const msg = {
        action: "unsubscribe",
        module: "trading",
        path: `ticker/${websocketPath}`,
      };

      websocket.send(JSON.stringify(msg));
      websocket.close();
    };
  }, [websocketPath]);

  return (
    <TickerContext.Provider value={state}>{children}</TickerContext.Provider>
  );
};

export default TickerProvider;
