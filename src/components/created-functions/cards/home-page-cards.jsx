import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row} from "react-bootstrap";
import CardMap from "./threecardmap";
import headCards from "../../../json/head-page-cards/head-cards";

const threeCards = () => 
    <Container>
        <Row>
            {CardMap(headCards)}
        </Row>
    </Container>

export default threeCards;
