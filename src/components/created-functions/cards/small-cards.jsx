/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from "react-bootstrap";

const SmCard = (props) => 
<div className = "div-cards">
  <a href = {props.url} target = "_blank">
    <Card className = "cert-cards">
      <Card.Img className = "cert-card-img-top" variant="top" src= {props.img} alt = "cert-img"/>
    </Card>
  </a>
</div>

export default SmCard;