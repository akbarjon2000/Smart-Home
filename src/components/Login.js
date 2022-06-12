import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "./firebase";

const Login = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);

    const navigateRegister = event => {
        navigate("/signup")
    }
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);
  
    const onSubmit = (event) => {
      const email = event.target.email.value;
    const password = event.target.password.value;
      signInWithEmailAndPassword(email, password);
    };
  
    let signInError;
      const location = useLocation();
      let from = location.state?.from?.pathname || "/";
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
            {/* <label className={agree? "ps-2 text-primary" : "ps-2 text-danger"} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
            <label
              className={`2px ${agree ? "text" : "text-danger"}`}
              htmlFor="terms"
            >
              Haven't account in Smart Home 
            </label>
          </div>
          <input
            className="bg-primary rounded w-50 mx-auto border-0 text-white mt-2"
            type="submit"
            value="Log in"
          />
        </form>
        <p>
          Signup?
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
