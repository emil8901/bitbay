import React, { useContext } from "react";
import { StatsContext } from "../../contexts/StatsContext";

const Stats: React.FC = () => {
  const { min24, max24 } = useContext(StatsContext);

  return (
    <div>
      <div>24h max {max24}</div>
      <div>24h min {min24}</div>
    </div>
  );
};

export default Stats;
