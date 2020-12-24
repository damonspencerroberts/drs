/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from "react-bootstrap";

const card = (props) => 
<div className="div-cards">
  <a href = {props.link} target="_blank">
    <Card className = "home-cards">
      <Card.Img className = "home-card-img-top" variant="top" src={props.img} alt = "test"/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  </a>
</div>

export default card;