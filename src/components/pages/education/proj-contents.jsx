/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component, Fragment} from "react";
import EachProj from "./each-project";
import projects from "../../../json/head-page-cards/project-content";
import EmailPrompt from "../../pages/contact/email-form";

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
            <div className = "bio-div">
                {projects.map(e => <EachProj key = {e.key} title = {e.title} content = {e.content} />)}
                <p className = "bio-p" style = {{padding: "3%"}}>
                    Each of my projects are present on <a className="jmu-a" href = "https://github.com/damonspencerroberts" style ={{textDecoration: "underline", cursor: "pointer"}} target="_blank">GitHub</a> and my <a className="jmu-a" href = "https://damonroberts-portfolio.herokuapp.com/" style ={{textDecoration: "underline", cursor: "pointer"}} target="_blank">portfolio website</a> for you to view. I am very open to constructive criticism and thrive at learning from my mistakes so please do not hesitate to <a className="jmu-a" onClick = {this.updateEmail} style ={{textDecoration: "underline", cursor: "pointer"}}>email me</a> with suggestions.
                </p>
            </div>
                {this.state.showEmail === true ? <div className="prom-div"><EmailPrompt backClick = {this.updateEmail}/></div> : null}
        </Fragment>
    }
    
}
    