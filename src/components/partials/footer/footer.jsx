import React from "react";
import {
    Footer
} from "../../styled-components/partials/footer-style";


//Add linkes to these footers
const footer = (props) => {

    return <Footer>
        <i onClick = {props.mailClick} className = "fIcons fas fa-envelope"></i>
        <a href = "https://twitter.com/damonwebdesign"><i className = "fIcons fab fa-twitter"></i></a>
        <a href = "https://www.linkedin.com/in/damon-roberts1997/"><i className = "fIcons fab fa-linkedin-in"></i></a>
        <a href = "https://github.com/damonspencerroberts"><i className = "fIcons fab fa-github"></i></a>
    </Footer>
    };

export default footer;
        


        


