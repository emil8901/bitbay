import React, { createContext, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";
import { IState, IWsRes } from "./types";

const initialState: IState = {
  min24: null,
  max24: null,
};

export const StatsContext = createContext<IState>(initialState);

const StatsProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<IState>(initialState);
  const { state: websocketPath } = useContext(GlobalContext);

  useEffect(() => {
    const websocket = new WebSocket(process.env.REACT_APP_WS_PATH);

    websocket.onopen = () => {
      const msg = {
        action: "subscribe-public",
        module: "trading",
        path: `stats/${websocketPath}`,
      };

      setState(initialState);

      websocket.send(JSON.stringify(msg));
    };

    websocket.onmessage = (event) => {
      const data: IWsRes = JSON.parse(event.data);

      if (data.action !== "push") return;

      const {
        message: [{ h, l }],
      } = data;

      setState({
        min24: l.toFixed(2),
        max24: h.toFixed(2),
      });
    };

    return () => {
      const msg = {
        action: "unsubscribe",
        module: "trading",
        path: `stats/${websocketPath}`,
      };

      websocket.send(JSON.stringify(msg));
      websocket.close();
    };
  }, [websocketPath]);

  return (
    <StatsContext.Provider value={state}>{children}</StatsContext.Provider>
  );
};

export default StatsProvider;
