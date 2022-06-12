import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import {  Link } from 'react-router-dom';
import auth from "./firebase";
import "./HeaderNavigation.css";
import { signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

const HeaderNavigation = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = event => {
      signOut(auth);
  }
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
        <Link to="/presentation">Presentation</Link>
        </li>
        <li>
          <a href="#about">Explainations</a>
        </li>
        <li className="about-developer">
          {/* <Link to="/login">Login</Link> */}
          {
                user ? <button className="btn btn-link text-white text-decoration-none mt-2" onClick={handleSignOut}>Sign out</button>
                :
                <Nav.Link className="btn btn-link text-white text-decoration-none mt-2"  as={Link} to="/login">
                Login
              </Nav.Link>}
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
