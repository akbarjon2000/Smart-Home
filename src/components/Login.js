import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const navigateRegister = event => {
        navigate("/signup")
    }
  return (
    <>
      <Form className="container w-50 mt-5">

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <p>New to Smart Home Application?<Link to={"/signup"} onClick={navigateRegister} className="text-primary pe-auto text-decoration-none">Please Sign up</Link></p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
