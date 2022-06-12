import Button from 'react-bootstrap/Button';
import React from "react";
// import { ReactComponent as Download } from "../images/Smart-home-Presentation.pptx"
// import presentation from "../images/Smart-home-Presentation.pptx"
// import { saveAs } from "file-saver";


const PowerPointPresentation = () => {
  return (
    <div className="container mt-5">
      {/* <h2>You may download the ppt file and have the idea about our project</h2>
      <div className="about__buttons">
        <a
          download=""
          href="./developerResume.pdf"
          className="button button--flex"
        >
          Download CV{" "}
          <Download className="button__icon" style={{ width: "20px" }} />
        </a>
      </div> */}

      {/* <button onClick={saveFile}>download</button>  */}

      {/* <Button>

      <a href="../images/Smart-home-Presentation.pptx" download><i className="fa fa-download"></i></a>
      </Button> */}

      {/* <Button>Download</Button> */}

      <Button variant="primary mt-5 d-flex justify-content-center align-items-center" >Download Presentation</Button>
    </div>
  );
};

export default PowerPointPresentation;
