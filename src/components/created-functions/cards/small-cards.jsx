import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from "react-bootstrap";
import DivCards from "../../styled-components/pages/cards/cardsdiv";

const SmCard = (props) => 
<DivCards>
  <a href = {props.url}>
    <Card className = "cert-cards">
      <Card.Img className = "cert-card-img-top" variant="top" src= {props.img} alt = "cert-img"/>
    </Card>
  </a>
</DivCards>

export default SmCard;