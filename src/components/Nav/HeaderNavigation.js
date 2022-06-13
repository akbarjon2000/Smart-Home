import React, { useRef } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./HeaderNavigation.css";
import Voice from "../VoiceRecognition/Voice";



const HeaderNavigation = () => {





  return (
    // <Navbar className="sticky-top w-100">
    <div className="navbar-top-sticky">
      <ul>
        <li>
          {/* <a href="#home">Home</a> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sensors">Sensors</Link>
        </li>
        <li>
          <a href="#contact">Descreption</a>
        </li>
        <li>
          <a href="#about">Explainations</a>
        </li>
        <li>
          <Voice />
        </li>
        <li className="about-developer">

        </li>
        <li className="about-developer">
          <a className="active" href="#about">
            About developers
          </a>
        </li>
      </ul>
    </div>
    // </Navbar>
  );
};

export default HeaderNavigation;
