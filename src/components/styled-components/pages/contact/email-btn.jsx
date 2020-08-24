import styled from "styled-components";

const EmailBtn = styled.a`
    background:linear-gradient(to bottom, #36b12a 5%, #4ff540 100%);
    background-color:#36b12a;
    border-radius:42px;
    display:inline-block;
    cursor:pointer;
    color: #4e5358;
    font-size:13px;
    padding:7px 12px;
    text-decoration:none;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

    &:hover {
        background:linear-gradient(to bottom, #267c1e 5%, #68ff5a 100%);
        background-color:#18a70b;
        color: #cf0000;
    }

    &:focus {
        outline:none;
        position:relative;
        top:1px;
    }

`;

const EmailSend = styled.input`
    background:linear-gradient(to bottom, #36b12a 5%, #4ff540 100%);
    background-color:#36b12a;
    border-radius:42px;
    display:inline-block;
    cursor:pointer;
    color: #4e5358;
    font-size:13px;
    padding:7px 12px;
    text-decoration:none;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    float: right;

    &:hover {
        background:linear-gradient(to bottom, #267c1e 5%, #68ff5a 100%);
        background-color:#18a70b;
        color: #cf0000;
    }

    &:focus {
        outline:none;
        position:relative;
        top:1px;
    }`;


export {EmailBtn, EmailSend};


