import React from "react";
import Header from "../../partials/header/navbar-content";
import ContHead from "./contact-header";
import ContBody from "./contact-cards";
import MailFoot from "../../created-functions/cards/mail-foot";


const Contact = () => 
    <div>
        <Header />
            <ContHead/>
            <ContBody/>
        <MailFoot />
    </div>


export default Contact;