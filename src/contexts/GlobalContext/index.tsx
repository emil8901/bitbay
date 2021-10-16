import React, { createContext, useState } from "react";
import { CurrencyPairTypes } from "./types";

export const GlobalContext = createContext<{
  state: CurrencyPairTypes;
  setCurrencyPair: Function;
}>({
  state: CurrencyPairTypes.BTCPLN,
  setCurrencyPair: (currencyPair: CurrencyPairTypes) => {},
});

const GlobalContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<CurrencyPairTypes>(
    CurrencyPairTypes.BTCPLN
  );

  const setCurrencyPair = (currencyPair: CurrencyPairTypes) =>
    setState(currencyPair);

  return (
    <GlobalContext.Provider value={{ state, setCurrencyPair }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
