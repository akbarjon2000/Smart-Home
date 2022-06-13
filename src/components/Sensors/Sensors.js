import React from 'react';
import "../Home/Home.css";
import CamaraSensor from '../Camera/CamaraSensor';
import FlameSensor from '../Flame/FlameSensor';
import TempretureSensor from '../Weather/TempretureSensor';
import RedLightSensor from '../LedLight/RedLightSensor';
import { Flame, LedTemp, SensorCon } from './style';
import Buzzer from '../Flame/Buzzer';

const Sensors = () => {
    return (
        <SensorCon>
            <LedTemp className='Led_Temp'>
                <RedLightSensor />
                <TempretureSensor />
            </LedTemp>
            <Flame >
                <FlameSensor />
                <Buzzer />
            </Flame>
            <div className='camera'>
                <p className='cameratext'>Current state of your home</p>
                <CamaraSensor />
            </div>
        </SensorCon>
    );
};

export default Sensors;