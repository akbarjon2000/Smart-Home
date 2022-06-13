import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { FaRegLightbulb, FaLightbulb } from 'react-icons/fa'
import { LedContainer } from "./style";
import { set, ref, onValue, update } from "firebase/database";
import { useState } from "react";
import { DataContextProvider } from "../Context/DataContext";
import { db } from "../firebase";
const RedLightSensor = () => {
  const [data, setData] = useContext(DataContextProvider)
  const [toggle, setToggle] = useState(data[data.length - 1].LED);
  // console.log(data)
  ///a
  // console.log(data[data.length - 1].LED)
  const handleToggle = () => {
    if (toggle == 1) {
      setToggle(0)
      update(ref(db, 'Sensors'), { LED: 0 })
    } else if (toggle == 0) {
      setToggle(1)
      update(ref(db, 'Sensors'), { LED: 1 })
    }
  }
  return (

    <LedContainer light={data[data.length - 1].LED}>
      {data[data.length - 1].LED === 1 ? <FaLightbulb className="icon" /> : <FaRegLightbulb className="icon" />}
      <div className="form-check form-switch">
        <input className="form-check-input toggle" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleToggle} />
      </div>
      <p className="lightText">{data[data.length - 1].LED === 1 ? 'Light On' : 'Light Off'}</p>
    </LedContainer>

  );
};

export default RedLightSensor;