import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import { set, ref, onValue, update } from "firebase/database"
import { uid } from "uid"
import { Container } from './styled'
import Footer from './Footer';


const Home = () => {
    const [temp, setTemp] = useState([])
    const [toggle, setToggle] = useState(false)
    //FETCHING DATA:
    useEffect(() => {
        onValue(ref(db), snapshot => {
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map(value => {
                    setTemp(prevState => [...prevState, value])
                })
            }
            console.log(data);

        })
    }, [])


    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleChange = () => {
        update(ref(db, "Sensors"), { buzzer: toggle ? "10" : 0 })
    }

    useEffect(() => {
        handleChange();
    }, [toggle])

    const date = new Date().getMinutes()
    console.log(date)

    console.log(temp)

    return (
        <Container>
            <div>
                <div className='time'>
                    <p>Buzzer</p>
                    <button onClick={handleToggle}>On/Off</button>
                </div>
            </div>
            <Footer></Footer>
        </Container>
    )
}

export default Home