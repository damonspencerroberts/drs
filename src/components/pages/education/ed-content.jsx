import React, {Fragment} from "react";
import CertifCards from "../../created-functions/cards/multi-certs";
import FinEduTable from "./ed-table";
import Projects from "./projects";

const EdContent = () => 
    <Fragment>
        <div className = "header-div">
            <h1 className = "h1-style">Education</h1>
        </div>
        <FinEduTable />
        <div className = "intro-div">
            <p className = "intro-p">After studying Economics and being exposed to programming, I became interested in Web Development. For the past 6 months, I have completed many online courses and focusing all my attention on Web Development.</p>
        </div>
        <Projects/>
        <div className="card-style">
        <h3 className = "h3-educ" >Certificates</h3>
            <CertifCards />
        </div>
    </Fragment>

export default EdContent;