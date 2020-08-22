import React from "react";
import {
    Footer,
    FBI
} from "../../styled-components/partials/footer-style";


//Add linkes to these footers
const footer = () => {
    return <Footer>
        {FBI("rgb(47, 47, 255)", "fab fa-facebook-f")}
        {FBI("rgb(47, 170, 241)", "fab fa-twitter")}
        {FBI("rgb(49, 57, 255)", "fab fa-linkedin-in")}
        {FBI("#17f702", "fab fa-github")}
    </Footer>
};

export default footer;
        


        


