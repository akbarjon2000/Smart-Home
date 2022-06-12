// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7NAQNLlUptEWoRMP7hQQ2JQSnc0Xw-_s",
  authDomain: "smart-home-assignment.firebaseapp.com",
  projectId: "smart-home-assignment",
  storageBucket: "smart-home-assignment.appspot.com",
  messagingSenderId: "219897658898",
  appId: "1:219897658898:web:081b8b11845504a93ce2cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;