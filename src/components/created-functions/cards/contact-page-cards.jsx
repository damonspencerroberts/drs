import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from "react-bootstrap";
import CardMap from "./threecardmap";
import contactCards from "../../../json/head-page-cards/contact-cards";
import {CtDiv, CtP} from "../../styled-components/pages/contact/contact-dt";
import EmailBtn from "../../styled-components/pages/contact/email-btn";

const ContactCards = () => 
    <Container>
        <Row>
            <Col className = "colt-dt" md ={4}>
                <CtDiv>
                    <CtP className = "email">Email: damonspencerroberts@gmail.com</CtP>
                    <CtP className = "email">Phone: +1 (540) 746-2375</CtP>
                    <EmailBtn>Email Me</EmailBtn>
                </CtDiv>
            </Col>
            {CardMap(contactCards)}
        </Row>
    </Container>

export default ContactCards;