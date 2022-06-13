import React, { useContext } from 'react';
import { WiHumidity } from 'react-icons/wi'
import { FaTemperatureLow } from 'react-icons/fa'
import { TbTemperatureCelsius } from 'react-icons/tb'
import { WeatherCon } from './WeatherStyle';
import { DataContextProvider } from '../Context/DataContext';



const TempretureSensor = () => {
  const [data, setData] = useContext(DataContextProvider)
  return (
    <WeatherCon>
      <div className='temp'>
        <FaTemperatureLow className='icon tempIcon' />
        <p className='text'>Temperature</p>
        <p className='sensorText'>{data[data.length - 1].Temp} <TbTemperatureCelsius className='cel' /></p>
      </div>
      <div className='humid'>
        <WiHumidity className='icon humidIcon' />
        <p className='text'>Humidity</p>
        <p className='sensorText'>{data[data.length - 1].Humid} %</p>
      </div>
    </WeatherCon>
  );
};

export default TempretureSensor;