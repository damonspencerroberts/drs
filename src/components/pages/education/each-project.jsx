import React from "react";

const eachProj = (props) =>
    <div style = {{padding: "3%"}}>
        <h6 className = "proj-title">{props.title}</h6>
        <p className = "bio-p">{props.content}</p>
    </div>

export default eachProj;
