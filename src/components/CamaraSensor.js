import React from 'react';
import { Card } from 'react-bootstrap';
import buzzer from "../images/camera.jpg";

const CamaraSensor = () => {
  return (
    <div className="container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" style={{ width: "12rem", text: "center" }} src={buzzer} />
        <Card.Body>
          <Card.Title>Camara</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

          {/* <input type="checkbox" checked data-toggle="toggle" data-onstyle="outline-success" data-offstyle="outline-danger"></input> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CamaraSensor;