import React, { useState, createContext } from 'react'
import { useEffect } from 'react';
import { set, ref, onValue, update } from "firebase/database";
import { db } from '../firebase';



export const DataContextProvider = createContext()

const DataContext = ({ children }) => {
    const [Data, setData] = useState([{ Humid: 23, LED: 0, Temp: 24, buzzer: 0, fire: 0, touch: 0 }]);
    //FETCHING DATA:
    useEffect(() => {
        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((value) => {
                    setData(prevState => ([...prevState, value]));
                    console.log(value)
                });
            }
            console.log(data);
        });
    }, []);
    return (
        <DataContextProvider.Provider value={[Data, setData]}>
            {children}
        </DataContextProvider.Provider>
    )
}

export default DataContext