import styled from "styled-components";


const CtDiv = styled.div`
    margin-top: 5%;
    padding: 10% 10% 8% 5%;
    text-align: left;
    color: #3a3a3a;
    border-radius: 15px;
    border: 2px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
`;

const EmailPromptDiv = styled.div`
    margin-top: 2%;
    padding: 5% 5% 5% 2%;
    text-align: left;
    color: #3a3a3a;
    border-radius: 15px;
    border: 2px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
    cursor: pointer;
`;
    
const CtP = styled.p`
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 2% 2% 4% 0%;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 3px !important;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); 
        height: 10px;
    }

    @media (max-width: 768px) {
        font-size: 0.6rem;
      }
`;

export {CtDiv, EmailPromptDiv, CtP}
