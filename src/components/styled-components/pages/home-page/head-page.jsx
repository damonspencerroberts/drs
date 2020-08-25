import styled from "styled-components";

const IntroDiv = styled.div`
    text-align: center;
    padding: 5% 15%;
    line-height: 3rem;
    color:#3a3a3a;

    @media (max-width: 768px) {
        padding: 5% 0;
      }
`;

const IntroP = styled.p`
    font-size: 1.2rem !important;
    letter-spacing: 1px;
    font-weight: 550 !important;

    @media (max-width: 768px) {
        font-size: 0.75rem !important;
      }
    `;

const BioDiv = styled.div`
    padding: 10% 10%;
    text-align: left;
    line-height: 3rem;
    color: #3a3a3a;
    box-shadow: 0 5px 10px rgba(0,0,0,0.6);
    border-radius: 20px;
    height: 400px;
    overflow: auto;
    
    &::-webkit-scrollbar {
        width: 13px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); 
        height: 30px;
    }
`;

const BioP = styled.p`
    font-size: 1rem;
    letter-spacing: 1px;
    font-weight: 500 !important;

    @media (max-width: 768px) {
        font-size: 0.75rem !important;
      }
`;

const BioBtnDiv = styled.div`
    padding: 3%;
    text-align: center;

    @media (max-width: 768px) {
        padding: 6%;
      }
`;

export { IntroDiv, IntroP, BioDiv, BioP, BioBtnDiv };


