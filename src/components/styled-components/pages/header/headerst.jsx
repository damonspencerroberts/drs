import styled from "styled-components";


const HeaderDiv = styled.div`
    text-align: center;
    padding: 10% 10% 5% 10%;
    color: #5c646b !important;
    
`;
    
const H1Style = styled.h1`
    font-size: 6rem !important;
    letter-spacing: 3px;
    text-shadow: 0 30px 50px rgba(0, 0, 0, 0.6);
    font-weight: 550 !important;
    font-family: 'Work Sans', sans-serif;

    @media (max-width: 768px) {
        font-size: 4rem !important;
    }
`;



export {HeaderDiv, H1Style}
