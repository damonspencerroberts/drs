import React, {Fragment} from "react";
import styled from 'styled-components';

const Footer = styled.footer`
    margin-top: 0;
    padding: 3%;
    text-align: center;
`;

const FBI = (color, cl) => {
    const IconStyle = styled.i`
    padding: 15px;
    transition: transform .35s;
    color: #2d0057;

    &:hover {
    color: ${color};
    transform: scale(1.6);
    cursor: pointer;
    }
    `;

    return <Fragment>
        <IconStyle className = {cl}></IconStyle>
    </Fragment>
}

export {Footer, FBI};
