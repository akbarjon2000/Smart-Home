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
      return <Navigate to="/login"  />;
    }
  
    
  
    return children;
  };
  
  export default RequireAuth;