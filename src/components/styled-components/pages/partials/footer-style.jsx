import styled from 'styled-components';

const Footer = styled.footer`
    margin-top: 0;
    padding: 3% 3% 1% 3%;
    text-align: center;

    @media (max-width: 768px) {
        padding-top: 6%;
      }
`;

const CrFoot = styled.div`
      padding: 1%;
      font-size: 0.6rem;
`;

export {Footer, CrFoot};
