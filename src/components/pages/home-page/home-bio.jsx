/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from "react";
import BioContent from "./bio-content";

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
            <div className = "bio-btn-div">
                <a className = "email-btn" onClick = {this.updateBio} style = {{fontSize: "1.4rem", marginLeft: "0"}}>Biography</a>
            </div>
            {this.state.showBio === true ? <BioContent /> : null}
            <div className = "bio-btn-div">
                <a className = "email-btn" href = "https://damonroberts-portfolio.herokuapp.com/" style = {{fontSize: "1.4rem", marginLeft: "0"}} target = "_blank">Portfolio</a>
            </div>
        </Fragment>
    }
}