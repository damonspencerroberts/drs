import React, {Fragment} from "react";
import {HeaderDiv, H1Style} from "../../styled-components/pages/header/headerst";
import CertifCards from "../../created-functions/cards/multi-certs";
import { IntroDiv, IntroP } from "../../styled-components/pages/home-page/head-page";
import CardsStyle from "../../styled-components/pages/cards/head-cards";
import FinEduTable from "./ed-table";
import Projects from "./projects";
import {H3Educ} from "../../styled-components/pages/educ/educ-jmu";

const EdContent = () => 
    <Fragment>
        <HeaderDiv>
            <H1Style>Education</H1Style>
        </HeaderDiv>
        <FinEduTable />
        <IntroDiv>
            <IntroP>After studying Economics and being exposed to programming, I became interested in Web Development. For the past 6 months, I have completed many online courses and focusing all my attention on Web Development.</IntroP>
        </IntroDiv>
        <Projects/>
        <CardsStyle>
        <H3Educ className = "h3Educ" >Certificates</H3Educ>
            <CertifCards />
        </CardsStyle>
    </Fragment>

export default EdContent;