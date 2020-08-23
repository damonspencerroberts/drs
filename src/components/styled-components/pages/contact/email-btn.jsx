import styled from "styled-components";

const EmailBtn = styled.a`
    background:linear-gradient(to bottom, #ed6111 5%, #ff8945 100%);
    background-color:#ed6111;
    border-radius:42px;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-size:13px;
    padding:7px 12px;
    text-decoration:none;
    text-shadow:0px 1px 0px #e86412;

    &:hover {
        background:linear-gradient(to bottom, #ff8945 5%, #ed6111 100%);
	    background-color:#ff8945;
    }

    &:focus {
        position:relative;
	    top:1px;
    }
`;

export default EmailBtn;