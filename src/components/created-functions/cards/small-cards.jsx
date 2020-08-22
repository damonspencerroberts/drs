import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from "react-bootstrap";

const SmCard = (props) => 
  <a href = {props.url}>
    <Card>
      <Card.Img className = "card-img-top" variant="top" src= {props.img} alt = "cert-img"/>
    </Card>
  </a>


export default SmCard;