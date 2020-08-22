import React, {Fragment} from "react";
import {HeaderDiv, H1Style} from "../../styled-components/pages/header/header";
import HeadCards from "../../created-functions/cards/multiple-cards";
import { IntroDiv, IntroP } from "../../styled-components/pages/home-page/head-page";
import CardsStyle from "../../styled-components/pages/cards/head-cards";


const HomeContent = (props) => 
    <Fragment>
        <HeaderDiv>
            <H1Style>{props.title}</H1Style>
        </HeaderDiv>
        <IntroDiv>
            <IntroP>{props.intro}</IntroP>
        </IntroDiv>
        <CardsStyle>
            <HeadCards />
        </CardsStyle> 
    </Fragment>

export default HomeContent;

