import React from "react";
import SmCard from "./small-cards";
import certCards from "../../../json/head-page-cards/educ-certs";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from "react-bootstrap";

const CertifCards = () => 
    <Container>
        <Row>
            {certCards.map(e => <Col key = {e.key} md={e.column}><SmCard url = {e.url} img = {e.img} /></Col>)} 
        </Row>
    </Container>

export default CertifCards;