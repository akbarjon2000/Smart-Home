import React from "react";
import { Navbar } from "react-bootstrap";
import {  Link } from 'react-router-dom';
import "./HeaderNavigation.css";

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
        <li className="about-developer">
          <Link to="/login">Login</Link>
        </li>
        <li className="about-developer">
          <a class="active" href="#about">
            About developers
          </a>
        </li>
      </ul>
    </div>
    // </Navbar>
  );
};

export default HeaderNavigation;
