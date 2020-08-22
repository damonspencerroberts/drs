import React from "react";
import Card from "./big-cards";
import headCards from "../../../json/head-page-cards/head-cards";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from "react-bootstrap";

const threeCards = () => 
    <Container>
        <Row>
            {headCards.map(e => <Col key = {e.key} md={e.column}><Card  title = {e.title} img = {e.img} /></Col>)} 
        </Row>
    </Container>

export default threeCards;
