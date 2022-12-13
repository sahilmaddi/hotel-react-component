import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import "./Cards.css";
export default function Cards() {
  return (
    <>
    <br/>
      <CardGroup>
        <Card
          style={{ width: "100%", height: "100% !important",
           color: "white" }}
          className="hyd"
        >
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Text>
              <center className="text-color">
                &emsp; <br /> Hyderabad
                <br />3 Hotels
              </center>
            </Card.Text>
          </Card.Body>
        </Card>
        &nbsp;&nbsp;
        <Card style={{ width: "100%" }} className="bang">
          <Card.Img variant="top" />

          <center className="text-color">
            &emsp;
            <br />
            &ensp;
            <br /> Bangalore
            <br />9 Hotels
          </center>
        </Card>
        &nbsp;&nbsp;
        <Card style={{ width: "100%" }} className="che">
          <center className="text-color">
           
            &emsp;
            <br />
            &ensp;
            <br /> Chennai
            <br /> 6 Hotels
          </center>
        </Card>
        &nbsp;&nbsp;
        <Card style={{ width: "150%" }} className="bez">
          <Card.Body>
            <Card.Title>
              <center className="text-color">
                &emsp;
                <br />
                Vijayawada
                <br />1 Hotel
              </center>
            </Card.Title>
          </Card.Body>
        </Card>
        &nbsp;&nbsp;
      </CardGroup>
    </>
  );
}
