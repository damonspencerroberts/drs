/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import {
    Footer
} from "../../styled-components/pages/partials/footer-style";


//Add linkes to these footers
const footer = (props) => {

    return <Footer>
        <i onClick = {props.mailClick} className = "fIcons fenv fas fa-envelope"></i>
        <a href = "https://twitter.com/damonwebdesign" target="_blank"><i className = "fIcons fab fa-twitter"></i></a>
        <a href = "https://www.linkedin.com/in/damon-roberts1997/" target="_blank"><i className = "fIcons fab fa-linkedin-in"></i></a>
        <a href = "https://github.com/damonspencerroberts" target="_blank"><i className = "fIcons figt fab fa-github"></i></a>
    </Footer>
    };

export default footer;
        


        


