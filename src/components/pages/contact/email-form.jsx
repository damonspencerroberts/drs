import React, {Component} from "react";
import {EmailPromptDiv} from "../../styled-components/pages/contact/contact-dt";
import {EmailBtn, EmailSend} from "../../styled-components/pages/contact/email-btn";

export default class EmailTest extends Component {
  constructor(props) {
	super(props);
	this.state = { 
        feedback: '', 
        name: '',
        email: '',
        success: false
    };
	this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
      this.setState({name: event.target.value})
  }

  handleEmailChange(event) {
      this.setState({email: event.target.value})
  }

  handleFeedbackChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit (event) {
    const templateId = "drs_email_template";
    this.sendFeedback(templateId, {message_html: this.state.feedback, from_email: this.state.email, from_name: this.state.name})
    this.setState({ feedback: '', name: '', email: '', success: true});
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
    "gmail", templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  render() {
	return (
      <form className="test-mailing" autoComplete = "off">
        <EmailPromptDiv>
            {this.state.success === true ? <p style = {{color: "#2d0057"}}>Email Sent!</p> : null}
            <input 
                className = "name-text"
                type = "text"
                id = "name-input"
                name = "name-input"
                onChange = {this.handleNameChange}
                placeholder = "Full Name"
                required
                value = {this.state.name}
            />
            <input
                className = "name-text"
                type = "email"
                id = "email-input"
                name = "email-input"
                onChange = {this.handleEmailChange}
                placeholder = "Your Email"
                required
                value = {this.state.email}
            />
            <textarea
                className = "feedback-text"
                id="test-mailing"
                name="test-mailing"
                onChange={this.handleFeedbackChange}
                placeholder="Your Message"
                required
                value={this.state.feedback}
            />
            <EmailBtn onClick = {this.props.backClick}>Back</EmailBtn>
            <EmailSend type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
    	</EmailPromptDiv>
  	</form>
	)
  }

  
}