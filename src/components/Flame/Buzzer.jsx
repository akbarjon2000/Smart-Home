import React, { useContext, useEffect, useState } from 'react'
import { BuzzCon } from './FlameStyle'
import { GiRingingAlarm } from 'react-icons/gi'
import { DataContextProvider } from '../Context/DataContext'
import { set, ref, onValue, update } from "firebase/database";
import { db } from '../firebase';
const Buzzer = () => {
    const [data, setData] = useContext(DataContextProvider)

    const [flame, setFlame] = useState(data[data.length - 1].fire)
    useEffect(() => {
        setFlame(data[data.length - 1].fire)
    }, [data])
    const handleClick = () => {
        update(ref(db, 'Sensors'), { fire: 0 })

    }
    return (
        <BuzzCon>
            <GiRingingAlarm className='icon' />
            {flame == 1 ? <p className='text' style={{ color: 'red' }}>Stop Alarm!</p> : <p className='text'>Alarm Stopped</p>}

            <div className='btn' onClick={handleClick}></div>
        </BuzzCon>
    )
}

export default Buzzer