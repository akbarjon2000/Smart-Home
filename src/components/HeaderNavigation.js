import React, { useRef } from "react";
import { Navbar } from "react-bootstrap";
import "./HeaderNavigation.css";
import Voice from "./VoiceRecognition/Voice";



const HeaderNavigation = () => {





  return (
    // <Navbar className="sticky-top w-100">
    <div className="navbar-top-sticky">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">Sensors</a>
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
          <a className="active" href="#about">
            Log In
          </a>
        </li>
        <li className="about-developer">
          <a className="active" href="#about">
            About developers
          </a>
        </li>
        <form ref={searchForm} action="https://www.google.com/search" method="get" target="_blank" id="search-form" className="about-developer form">
          <input ref={searchFormInput} name="q" type="text" placeholder="검색어를 입력하세요..." autoComplete="off" autoFocus id="Input" />
        </form>
      </ul>
    </div>
    // </Navbar>
  );
};

export default HeaderNavigation;
