import React from "react";
import Header from "../../partials/header/navbar-content";
import Footer from "../../partials/footer/footer";
import {HeaderDiv, H1Style} from "../../styled-components/header/header";
import HeadCards from "../../created-functions/cards/multiple-cards";
import IntroDiv from "../../styled-components/pages/head-page";

const Head = () => 
    <div>
        <Header />
            <HeaderDiv>
                <H1Style>Damon Roberts</H1Style>
            </HeaderDiv>
            <IntroDiv>
                <p>This is an intro to myself need to add stuff here</p>
            </IntroDiv>
            <div className = "headcards">
                <HeadCards />
            </div>
        <Footer />
    </div>

export default Head;