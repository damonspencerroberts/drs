import React, {Component, Fragment} from "react";
import { EmailBtn } from "../../styled-components/pages/contact/email-btn";
import { BioBtnDiv } from "../../styled-components/pages/home-page/head-page";
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
            <BioBtnDiv>
                <EmailBtn onClick = {this.updateProject} style = {{fontSize: "1.4rem", marginLeft: "0"}}>Projects</EmailBtn>
            </BioBtnDiv>
            {this.state.showProj === true ? <ProjectContent /> : null}
        </Fragment>
    }
}