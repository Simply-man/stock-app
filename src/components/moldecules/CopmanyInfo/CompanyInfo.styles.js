import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.5px solid #c0c7d6;
    margin: 2rem auto;
    width: 80%;
    background-color: #f7f8fa;
    padding: 1rem;
    -webkit-box-shadow: 0px 0px 23px -5px #c0c7d6;
    box-shadow: 0px 0px 23px -5px #c0c7d6;
`;

export const StyledInfoCard = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & div:nth-child(1) {
        width: 50%;
    }
`;

export const StyledDescription = styled.p`
    text-align: justify;
`;
