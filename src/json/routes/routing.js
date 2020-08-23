import _ from "lodash";
import Home from "../../components/pages/home-page/home-final";
import Education from "../../components/pages/education/education-final";
import Contact from "../../components/pages/contact/contact-final";
import EmailTest from "../../components/pages/contact/email-form";

const routingArray = [
    {
        key: 0,
        pathWay: "/",
        content: Home
    },
    {
        key: 1,
        pathWay: "/" + _.lowerCase("education"),
        content: Education
    },
    {
        key: 2,
        pathWay: "/" + _.lowerCase("contact"),
        content: Contact
    },
    {
        key: 3,
        pathWay: "/" + _.lowerCase("test"),
        content: EmailTest
    }
]

export default routingArray;