import styled from "styled-components";

const IntroDiv = styled.div`
    text-align: center;
    padding: 5% 15%;
    line-height: 3rem;
    color:#4e5358;
`;

const IntroP = styled.p`
    font-size: 1.2rem !important;
    letter-spacing: 3px;
    text-shadow: 0 30px 50px rgba(0, 0, 0, 0.6);
    font-weight: 550 !important;
    `;

const BioDiv = styled.div`
    padding: 10% 10%;
    text-align: left;
    line-height: 3rem;
    color: #4e5358;
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
    font-size: .9rem;
    letter-spacing: 2.5px;
    text-shadow: 0 30px 50px rgba(0, 0, 0, 0.6);
    font-weight: 500 !important;
`;

const BioBtnDiv = styled.div`
    padding: 3%;
    text-align: center;

    @media (max-width: 768px) {
        padding: 6%;
      }
`;

export { IntroDiv, IntroP, BioDiv, BioP, BioBtnDiv };


