import React, {Component, Fragment} from "react";
import Footer from "../../partials/footer/footer";
import EmailPrompt from "../../pages/contact/email-form";
import PromDiv from "../../styled-components/email-prompt";

export default class MailFoot extends Component {
    constructor(props){
        super(props)
        this.state = {
            mailFoot: false
        }
        this.updateMailFoot = this.updateMailFoot.bind(this);
    }

    updateMailFoot() {
        this.setState({mailFoot: !this.state.mailFoot})
    }

    render() {
        return <Fragment>
            {this.state.mailFoot === true ? <PromDiv><EmailPrompt backClick = {this.updateMailFoot} /></PromDiv> : null}
        <Footer mailClick = {this.updateMailFoot} />
        </Fragment>
    }
}