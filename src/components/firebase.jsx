import React from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9QgsyyqZte-BnCM5akaSw6asQrOUBm98",
    authDomain: "smarthome-351409.firebaseapp.com",
    databaseURL: "https://smarthome-351409-default-rtdb.firebaseio.com",
    projectId: "smarthome-351409",
    storageBucket: "smarthome-351409.appspot.com",
    messagingSenderId: "630634697057",
    appId: "1:630634697057:web:8ca90e97f2e4b39406b520",
    measurementId: "G-N8YSQEXZ5H"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

const auth = getAuth(app);
export default auth;
