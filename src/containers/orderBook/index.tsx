import React, { useContext } from "react";
import { OrderBookContext } from "../../contexts/OrderBookContext";
import { CurrencyPairTypes } from "../../contexts/GlobalContext/types";
import OrderRow from "../../components/OrderRow";
import SC from "./OrderBook.styles";
import { GlobalContext } from "../../contexts/GlobalContext";
import StatsProvider from "../../contexts/StatsContext";
import TickerProvider from "../../contexts/TickerContext";
import Spread from "../../components/Spread";
import Stats from "../../components/Stats";

const OrderBook: React.FC = () => {
  const { setCurrencyPair } = useContext(GlobalContext);
  const { buyOrder, sellOrder } = useContext(OrderBookContext);

  const handleChange = (e: React.ChangeEvent<{ value: string }>) =>
    setCurrencyPair(e.target.value);

  return (
    <SC.OrderBook>
      <SC.OrderBookContainer>
        <SC.OrderBookHeader>
          <select onChange={handleChange}>
            <option value={CurrencyPairTypes.BTCPLN}>BTC-PLN</option>
            <option value={CurrencyPairTypes.ETHPLN}>ETH-PLN</option>
          </select>
          <TickerProvider>
            <Spread />
          </TickerProvider>
          <StatsProvider>
            <Stats />
          </StatsProvider>
        </SC.OrderBookHeader>
        <SC.OrderBookList>
          <div>
            <SC.OrderBookListTitle>BID kupno</SC.OrderBookListTitle>
            <div>
              {buyOrder
                .slice(0, 30)
                .map(({ state }) =>
                  state ? <OrderRow state={state} /> : null
                )}
            </div>
          </div>
          <div>
            <SC.OrderBookListTitle>ASK sprzedaż</SC.OrderBookListTitle>
            <div>
              {sellOrder
                .slice(0, 30)
                .map(({ state }) =>
                  state ? <OrderRow ask state={state} /> : null
                )}
            </div>
          </div>
        </SC.OrderBookList>
      </SC.OrderBookContainer>
    </SC.OrderBook>
  );
};

export default OrderBook;
