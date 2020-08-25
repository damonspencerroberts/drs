import styled from "styled-components";


const HeaderDiv = styled.div`
    text-align: center;
    padding: 10% 10% 5% 10%;
    color: #3a3a3a !important;
    
`;
    
const H1Style = styled.h1`
    font-size: 6rem !important;
    letter-spacing: 2px;
    font-weight: 550 !important;
    font-family: 'Karla', sans-serif;

    @media (max-width: 768px) {
        font-size: 3rem !important;
    }
`;



export {HeaderDiv, H1Style}
