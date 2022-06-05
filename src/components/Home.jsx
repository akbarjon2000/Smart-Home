import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { set, ref, onValue, update } from "firebase/database";
import { uid } from "uid";
import { Container } from "./styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import Footer from "./Footer";
import weather from "../images/weather.JPG";
import Banner from "./Banner";

const Home = () => {
  const [temp, setTemp] = useState([]);
  const [toggle, setToggle] = useState(false);

  const currentDate = new Date().toLocaleDateString("en-US");
  const currentTime = new Date().toLocaleTimeString("en-US");

  //FETCHING DATA:
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((value) => {
          setTemp((prevState) => [...prevState, value]);
        });
      }
      console.log(data);
    });
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = () => {
    update(ref(db, "Sensors"), { buzzer: toggle ? "10" : 0 });
  };

  useEffect(() => {
    handleChange();
  }, [toggle]);

  const date = new Date().getMinutes();
  console.log(date);

  console.log(temp);

  const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  return (
    <Container>
      <div>
          <Banner></Banner>
        <div className="time">
          <div className="has-bg-img">
              {/* <img class="bg-img w-25" src={weather} alt="..." /> */}
            <h1 className="text-center fw-bold">{currentDate}</h1>
            <h2 className="text-center">{currentTime}</h2>
          </div>

          <p>Buzzer</p>
          <button onClick={handleToggle}>On/Off</button>
        </div>
      </div>
      <Footer></Footer>
    </Container>
  );
};

export default Home;
