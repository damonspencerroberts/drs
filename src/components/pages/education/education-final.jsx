import React from "react";
import Header from "../../partials/header/navbar-content";
import Footer from "../../partials/footer/footer";
import {HeaderDiv, H1Style} from "../../styled-components/pages/header/headerst";
import CertifCards from "../../created-functions/cards/multi-certs";
import { IntroDiv, IntroP } from "../../styled-components/pages/home-page/head-page";
import { EdDiv, EdTable } from "../../styled-components/pages/educ/educ-table";

const Education = () => 
    <div>
        <Header />
            <HeaderDiv>
                <H1Style>Education</H1Style>
            </HeaderDiv>
            <EdDiv>
                <EdTable>
                <thead>
                    <tr>
                        <td>
                            <h3>James Madison University</h3>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span>Major: Economics</span>   
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Concentration: Quantitative Economics</span>   
                        </td>
                    </tr>
                </tbody>
                </EdTable>
            </EdDiv>
            <IntroDiv>
                <IntroP>After studying Economics and being exposed to programming, I became interested in Web Development. For the past 6 months, I have completed many online courses and focusing all my attention on Web Development.</IntroP>
            </IntroDiv>
            <div>
                <CertifCards />
            </div>
        <Footer />
    </div>


export default Education;