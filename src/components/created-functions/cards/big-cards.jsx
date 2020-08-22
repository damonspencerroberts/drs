import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from "react-bootstrap";

const card = (props) => 
  <a href = "/">
    <Card>
      <Card.Img className = "card-img-top" variant="top" src={props.img} alt = "test"/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  </a>


export default card;