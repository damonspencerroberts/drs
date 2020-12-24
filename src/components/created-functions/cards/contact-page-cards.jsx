/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from "react-bootstrap";
import CardMap from "./threecardmap";
import contactCards from "../../../json/head-page-cards/contact-cards";
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
                <div className = "ct-div">
                    <div><h6>Email</h6></div>
                    <p className = "ct-p email">damonspencerroberts@gmail.com</p>
                    <div><h6>Phone</h6></div>
                    <p className = "ct-p email">+1 (540) 746-2375</p>
                    <a className = "email-btn" onClick = {this.handleEmailPrompt}>Email Me</a>
                </div> : <EmailPrompt backClick = {this.handleEmailPrompt}/> } 
            </Col>
            {CardMap(contactCards)}
        </Row>
    </Container>
    }
}

