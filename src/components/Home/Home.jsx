import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { set, ref, onValue, update } from "firebase/database";
import { Container } from "./styled";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "./Footer";
import "./Home.css";
import Sensors from "../Sensors/Sensors";
import DataContext, { DataContextProvider } from "../Context/DataContext";

const Home = () => {
  const [temp, setTemp] = useState([]);
  const [toggle, setToggle] = useState(false);

  const currentDate = new Date().toLocaleDateString("en-US").slice(2, 4);
  const currentTime = new Date().toLocaleTimeString("en-US");




  const date = new Date().getMinutes();
  // console.log(date);

  // console.log(temp);

  const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    // <BrowserRouter>
    <Container>
      <DataContext>

        <div className="navbar-top-sticky-container">
          <div className="time">
            <div className="has-bg-img">
              <h1 className="text-center fw-bold">{currentDate} May</h1>
              <h2 className="text-center">{currentTime}</h2>
            </div>

            <h2 className="text-center mt-5">Sensors</h2>
            <div>
              <Sensors></Sensors>
            </div>
          </div>
        </div>
        <Footer></Footer>

      </DataContext>
    </Container>
    // </BrowserRouter>
  );
};

export default Home;
