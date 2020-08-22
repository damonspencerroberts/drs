import _ from "lodash";
import Home from "../../components/pages/home-page/home-final";
import Education from "../../components/pages/education/education-final";
import Contact from "../../components/pages/contact/contact-final";

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
    }
]

export default routingArray;