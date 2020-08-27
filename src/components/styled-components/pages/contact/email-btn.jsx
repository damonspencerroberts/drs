import styled from "styled-components";

const EmailBtn = styled.a`
    background:linear-gradient(to bottom, #5bc976 5%, #50da3b 100%);
    background-color:#5bc976;
    border-radius:15px;
    display:inline-block;
    cursor:pointer;
    color: #3a3a3a;
    font-size:17px;
    padding: 8px 22px;
    text-decoration:none;
    margin-left: 2%;

    &:hover {
    background:linear-gradient(to bottom, #50da3b 5%, #5bc976 100%);
    background-color:#50da3b;
    color: #3a3a3a;
    }

    &:focus {
        outline:none;
        position:relative;
        top:1px;
    }

    `;

const EmailSend = styled.input`
    background:linear-gradient(to bottom, #5bc976 5%, #50da3b 100%);
    background-color:#5bc976;
    border-radius:15px;
    display:inline-block;
    cursor:pointer;
    color: #3a3a3a;
    font-size:17px;
    padding: 8px 22px;
    text-decoration:none;
    float: right;
    margin-right: 2%;

    &:hover {
    background:linear-gradient(to bottom, #50da3b 5%, #5bc976 100%);
    background-color:#50da3b;
    color: #3a3a3a;
    }

    &:focus {
        outline:none;
        position:relative;
        top:1px;
    }`;


export {EmailBtn, EmailSend};


