import React, {Fragment} from "react";
import ProPic from "./profile-pic";
import Bio from "./home-bio";


const HomeContent = (props) => 
    <Fragment>
            <div className = "header-div">
                <h1 className = "h1-style">{props.title}</h1>
            </div>
            <ProPic />
            <div className = "intro-div">
                <p className = "intro-p">{props.intro}</p>
            </div>
            <Bio />
    </Fragment>

export default HomeContent;

