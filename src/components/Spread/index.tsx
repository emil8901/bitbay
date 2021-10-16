import React, { useContext } from "react";
import { TickerContext } from "../../contexts/TickerContext";

const Spread: React.FC = () => {
  const { spread } = useContext(TickerContext);

  return (
    <div>
      <div>spread {spread}</div>
    </div>
  );
};

export default Spread;
