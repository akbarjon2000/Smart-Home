import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "./firebase";
import Loading from "./Loading";

const Login = () => {
  const navigate = useNavigate();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
  ] = useSignInWithEmailAndPassword(auth);

  const navigateRegister = event => {
      navigate("/signup")
  }
  if(loading) {
    return <Loading></Loading>
  }
  if(user) {
    navigate('/');
  }

  const onSubmit = (event) => {
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    // console.log(data);
    navigate('/');
    event.preventDefault();
  };
  return (
    <>
      <div className="register-form">
        <h2 className="text-center mt-5">Please Log in</h2>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Your Password"
            required
          />

          <div className="form-check">
            
          </div>
          <input
            className="bg-primary rounded w-50 mx-auto border-0 text-white mt-2"
            type="submit"
            value="Login"
          />
        </form>
        <p>
          Haven't an account on smart home?
          <Link
            to={"/signup"}
            onClick={navigateRegister}
            className="text-primary pe-auto text-decoration-none"
          >
            Please Sign up
          </Link>
        </p>
      </div>
      );
    </>
  );
};

export default Login;
