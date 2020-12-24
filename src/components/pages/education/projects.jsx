/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component, Fragment} from "react";
import ProjectContent from "./proj-contents";
export default class project extends Component {
    constructor() {
        super()

        this.state = {
            showProj: false
        }
        this.updateProject = this.updateProject.bind(this);
    }

    updateProject() {
        this.setState({showProj: !this.state.showProj})
    }

    render() {
        return <Fragment>
            <div className = "bio-btn-div">
                <a className = "email-btn" onClick = {this.updateProject} style = {{fontSize: "1.4rem", marginLeft: "0"}}>Projects</a>
            </div>
            {this.state.showProj === true ? <ProjectContent /> : null}
        </Fragment>
    }
}