import React from "react";
import Header from "../../partials/header/navbar-content";
import Footer from "../../partials/footer/footer";
import ContHead from "./contact-header";
import ContBody from "./contact-cards";


const Contact = () => 
    <div>
        <Header />
            <ContHead/>
            <ContBody/>
        <Footer />
    </div>


export default Contact;