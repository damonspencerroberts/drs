import React from "react";
import Header from "../../partials/header/navbar-content";
import EdContent from "./ed-content"; 
import MailFoot from "../../created-functions/cards/mail-foot"; 
import Social from "../../created-functions/cards/social-share";
const Education = () => 
    <div>
        <Header />
        <Social />
        <EdContent />
        <MailFoot />
    </div>


export default Education;