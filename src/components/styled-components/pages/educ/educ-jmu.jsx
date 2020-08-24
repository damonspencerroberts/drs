import styled from "styled-components";

const H3Educ = styled.h3`
    font-size: 2.2rem;
    text-shadow: 0 30px 50px rgba(0, 0, 0, 0.6);
    color: #3a3a3a;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const SpanMajor = styled.span`
    font-size: 1.2rem;
    text-shadow: 0 30px 50px rgba(0, 0, 0, 0.6);

    @media (max-width: 768px) {
        font-size: 0.75rem !important;
    }
`;

const JmuA = styled.a`
    text-decoration: none;
    color: #3a3a3a;

    &:hover {
        text-decoration: none;
        color: #3de014;
    }
`;

const ProjTitle = styled.h6`
    font-weight: 800 !important;
    font-size: 1.3rem;
`;

export {H3Educ, SpanMajor, JmuA, ProjTitle}

