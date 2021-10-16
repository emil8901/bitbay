import React from "react";
import SC from "./OrderRow.styles";

interface Props {
  ask?: boolean;
  state: any;
}

const OrderRow: React.FC<Props> = ({ ask, state }) => {
  const amountOfCryptocurrency = state.ca;
  const exchangeRate = state.ra;

  const cost = (
    parseFloat(amountOfCryptocurrency) * parseFloat(exchangeRate)
  ).toFixed(2);

  return (
    <SC.OrderRow ask={ask}>
      <div>{exchangeRate}</div>
      <div>{amountOfCryptocurrency}</div>
      <div>{cost}</div>
      <div>{state.co}</div>
    </SC.OrderRow>
  );
};

export default OrderRow;
