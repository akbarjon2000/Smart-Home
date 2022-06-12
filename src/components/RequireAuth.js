import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from './firebase';
import { Navigate, useLocation } from "react-router-dom";
import Loading from './Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] =
      useSendEmailVerification(auth);
  
    // console.log("inside require auth", user);
    if (loading) {
      return <Loading></Loading>;
    }
  //   console.log(user);
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
      return (
        <div className="text-center mt-5">
          <h3 className="text-danger">Your Email is not verified!!!</h3>
          <h5 className="text-success">Please verify your email address</h5>
          <button
            className="btn btn-primary"
            onClick={async () => {
              await sendEmailVerification();
            }}
          >
            Send verification email Agin
          </button>
        </div>
      );
    }
  
    return children;
  };
  
  export default RequireAuth;