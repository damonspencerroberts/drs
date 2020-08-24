import React, {Fragment} from "react";
import {HeaderDiv, H1Style} from "../../styled-components/pages/header/headerst";
import { IntroDiv, IntroP } from "../../styled-components/pages/home-page/head-page";
import ProPic from "./profile-pic";
import Bio from "./home-bio";


const HomeContent = (props) => 
    <Fragment>
            <HeaderDiv>
                <H1Style>{props.title}</H1Style>
            </HeaderDiv>
            <ProPic />
            <IntroDiv>
                <IntroP>{props.intro}</IntroP>
            </IntroDiv>
            <Bio />
    </Fragment>

export default HomeContent;

