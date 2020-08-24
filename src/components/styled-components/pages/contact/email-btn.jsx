import styled from "styled-components";

const EmailBtn = styled.a`
    background:linear-gradient(to bottom, #4eff3d 5%, #4ff540 100%);
    background-color:#4eff3d;
    border-radius:42px;
    display:inline-block;
    cursor:pointer;
    color: #4e5358;
    font-size:14px;
    font-weight: 700;
    padding:7px 12px;
    text-decoration:none;
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.6);
    transition: transform 0.2s;
    margin-left: 2%;

    &:hover {
        background:linear-gradient(to bottom, #4eff3d 5%, #68ff5a 100%);
        background-color:#4eff3d;
        color: #001aff;
        transform: scale(1.05)
    }

    &:focus {
        outline:none;
        position:relative;
        top:1px;
    }

`;

const EmailSend = styled.input`
    background:linear-gradient(to bottom, #4eff3d 5%, #4ff540 100%);
    background-color:#4eff3d;
    border-radius:42px;
    display:inline-block;
    cursor:pointer;
    color: #4e5358;
    font-size:14px;
    font-weight: 700;
    padding:7px 12px;
    text-decoration:none;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
    float: right;
    transition: transform 0.2s;
    margin-right: 2%;

    &:hover {
        background:linear-gradient(to bottom, #4eff3d 5%, #68ff5a 100%);
        background-color:#4eff3d;
        color: #001aff;
        transform: scale(1.05)
    }

    &:focus {
        outline:none;
        position:relative;
        top:1px;
    }`;


export {EmailBtn, EmailSend};


