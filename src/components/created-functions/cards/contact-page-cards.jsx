import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from "react-bootstrap";
import CardMap from "./threecardmap";
import contactCards from "../../../json/head-page-cards/contact-cards";
import {CtDiv, CtP} from "../../styled-components/pages/contact/contact-dt";
import {EmailBtn} from "../../styled-components/pages/contact/email-btn";
import EmailPrompt from "../../pages/contact/email-form";


export default class ContactCards extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showEmail: false
        };
        this.handleEmailPrompt = this.handleEmailPrompt.bind(this);
    }

    handleEmailPrompt() {
        this.setState({showEmail: !this.state.showEmail})
    }

    render() {
        return <Container>
        <Row>
            <Col className = "colt-dt" sm = {12} md = {6} lg ={4}>
            {this.state.showEmail === false ? 
                <CtDiv>
                    <div><h6>Email</h6></div>
                    <CtP className = "email">damonspencerroberts@gmail.com</CtP>
                    <div><h6>Phone</h6></div>
                    <CtP className = "email">+1 (540) 746-2375</CtP>
                    <EmailBtn onClick = {this.handleEmailPrompt}>Email Me</EmailBtn>
                </CtDiv> : <EmailPrompt backClick = {this.handleEmailPrompt}/> } 
            </Col>
            {CardMap(contactCards)}
        </Row>
    </Container>
    }
}

