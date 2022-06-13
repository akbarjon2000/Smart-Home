import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import buzzer from "../../images/camera.jpg";
import { CamCon } from './CameraStyle';
import { set, onValue, update } from "firebase/database";
import { getStorage, getDownloadURL, ref } from 'firebase/storage'
import { async } from '@firebase/util';
// import { storage } from '../firebase';

const CamaraSensor = () => {
  // const [url, setUrl] = useState()

  // useEffect(() => {
  //   onValue(ref(getStorage()), (snapshot) => {
  //     const data = snapshot.val();
  //     if (data !== null) {
  //       Object.values(data).map((value) => {
  //         // setData(prevState => ([...prevState, value]));
  //         console.log(value)
  //       });
  //     }
  //     console.log(data);
  //   });
  // }, []);
  return (
    <CamCon>

    </CamCon>
  );
};

export default CamaraSensor;