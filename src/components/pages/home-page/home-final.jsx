import React, {Component} from "react";
import Header from "../../partials/header/navbar-content";
import Footer from "../../partials/footer/footer";
import HomeContent from "./home-contents";
import headCont from "../../../json/head-page-cards/home-content";
import EmailPrompt from "../../pages/contact/email-form";

export default class Head extends Component {
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
       return <div>
        <Header />
            <HomeContent 
            title = {headCont.title} 
            intro = {headCont.intro}            
            />
            {this.state.mailFoot === true ? <EmailPrompt /> : null}
        <Footer mailClick = {this.updateMailFoot} />
    </div>
    } 
}
    
    
