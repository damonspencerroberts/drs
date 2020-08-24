import React, {Component} from "react";
import Header from "../../partials/header/navbar-content";
import HomeContent from "./home-contents";
import headCont from "../../../json/head-page-cards/home-content";
import MailFoot from "../../created-functions/cards/mail-foot";


export default class Head extends Component {
    render() {
       return <div>
        <Header />
            <HomeContent 
            title = {headCont.title} 
            intro = {headCont.intro}            
            /> 
        <MailFoot />
    </div>
    } 
}
    
    
