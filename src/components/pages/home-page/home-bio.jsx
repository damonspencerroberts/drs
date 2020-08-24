import React, { Component, Fragment } from "react";
import { EmailBtn } from "../../styled-components/pages/contact/email-btn";
import BioContent from "./bio-content";
import { BioBtnDiv } from "../../styled-components/pages/home-page/head-page";

export default class Bio extends Component {
    constructor() {
        super()
        this.state = {
            showBio: false
        }
        this.updateBio = this.updateBio.bind(this);
    }

    updateBio() {
        this.setState({showBio: !this.state.showBio})
    }

    render() {
        return <Fragment>
            <BioBtnDiv>
                <EmailBtn onClick = {this.updateBio} style = {{fontSize: "1.2rem"}}>Biography</EmailBtn>
            </BioBtnDiv>
            {this.state.showBio === true ? <BioContent /> : null}
        </Fragment>
    }
}