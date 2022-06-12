import React from 'react';
import "./Home.css";
import BuzzerSensor from './BuzzerSensor';
import CamaraSensor from './CamaraSensor';
import FlameSensor from './FlameSensor';
import GreenLights from './GreenLights';
import TempretureSensor from './TempretureSensor';
import RedLightSensor from './RedLightSensor';

const Sensors = () => {
    return (
        <div className="sensor container">
            <FlameSensor></FlameSensor>
              <TempretureSensor></TempretureSensor>
              <CamaraSensor></CamaraSensor>
              <RedLightSensor></RedLightSensor>
              <GreenLights></GreenLights>
        </div>
    );
};

export default Sensors;