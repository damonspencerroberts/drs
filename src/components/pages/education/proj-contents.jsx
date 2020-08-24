/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component, Fragment} from "react";
import {BioDiv, BioP} from "../../styled-components/pages/home-page/head-page";
import EachProj from "./each-project";
import projects from "../../../json/head-page-cards/project-content";
import EmailPrompt from "../../pages/contact/email-form";
import PromDiv from "../../styled-components/email-prompt";
import {JmuA} from "../../styled-components/pages/educ/educ-jmu";

export default class ProjContent extends Component {
    constructor() {
        super()

        this.state = {
            showEmail: false
        }
        this.updateEmail = this.updateEmail.bind(this);
    }

    updateEmail() {
        this.setState({showEmail: !this.state.showEmail});
    }
    
    render() {
        return <Fragment>
            <BioDiv>
                {projects.map(e => <EachProj key = {e.key} title = {e.title} content = {e.content} />)}
                <BioP style = {{padding: "3%"}}>
                    Each of my projects are present on GitHub for you to view. I am very open to constructive criticism and thrive at learning from my mistakes so please do not hesitate to <JmuA onClick = {this.updateEmail} style ={{textDecoration: "underline", cursor: "pointer"}}>email me</JmuA> with suggestions.
                </BioP>
            </BioDiv>
                {this.state.showEmail === true ? <PromDiv><EmailPrompt backClick = {this.updateEmail}/></PromDiv> : null}
        </Fragment>
    }
    
}
    