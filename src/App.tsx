import React from "react";
import GlobalContextProvider from "./contexts/GlobalContext";
import OrderBook from "./containers/orderBook";
import OrderBookProvider from "./contexts/OrderBookContext";
import SC from "./Global.styles";

const App: React.FC = () => {
  return (
    <>
      <SC.GlobalStyle />
      <GlobalContextProvider>
        <OrderBookProvider>
          <OrderBook />
        </OrderBookProvider>
      </GlobalContextProvider>
    </>
  );
};

export default App;
