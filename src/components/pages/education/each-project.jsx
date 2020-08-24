import React from "react";
import {BioP} from "../../styled-components/pages/home-page/head-page";
import {ProjTitle} from "../../styled-components/pages/educ/educ-jmu";

const eachProj = (props) =>
    <div style = {{padding: "3%"}}>
        <ProjTitle>{props.title}</ProjTitle>
        <BioP>{props.content}</BioP>
    </div>

export default eachProj;
