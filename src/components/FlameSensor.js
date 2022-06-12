import React from "react";
import { Card } from "react-bootstrap";
import flame from "../images/flame.jpg";

const FlameSensor = () => {
  return (
    <div className="container rounded">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={flame} />
        <Card.Body>
          <Card.Title>Flame</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

          <input
            type="checkbox"
            checked
            data-toggle="toggle"
            data-onstyle="outline-success"
            data-offstyle="outline-danger"
          ></input>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FlameSensor;
