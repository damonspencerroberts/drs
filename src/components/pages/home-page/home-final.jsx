import React from "react";
import Header from "../../partials/header/navbar-content";
import Footer from "../../partials/footer/footer";
import {HeaderDiv, H1Style} from "../../styled-components/header/header";

const Head = () => 
    <div>
        <Header />
            <HeaderDiv>
                <H1Style>Damon Roberts</H1Style>
            </HeaderDiv>
        <Footer />
    </div>

export default Head;