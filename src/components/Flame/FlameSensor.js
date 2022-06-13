import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { FlameCon } from "./FlameStyle";
import { GoFlame } from "react-icons/go"
import { DataContextProvider } from "../Context/DataContext";
const FlameSensor = () => {
  const [data, setData] = useContext(DataContextProvider)

  const [flame, setFlame] = useState(data[data.length - 1].fire)
  // console.log(flame)
  useEffect(() => {
    setFlame(data[data.length - 1].fire)
  }, [data])
  return (
    <FlameCon flame={flame}>
      <GoFlame className="icon" />
      {flame === 1 ? <p className="text" style={{ color: "red" }}>FLAME detected in your house!!!</p> : <p className="text">Currently no FLAME in your house.</p>}

    </FlameCon>
  );
};

export default FlameSensor;
