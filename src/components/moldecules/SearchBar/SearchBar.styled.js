import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 500px;
    height: 50px;
    margin: auto;
`;

export const WrapperSearchAnswersList = styled.div`
    position: absolute;
    top: 56px;
    width: inherit;
`;

export const SearchAnswersList = styled.div`
    display: flex;
    width: inherit;
    min-height: 50px;
    margin: 0.5rem 0;
    border: 0.5px solid ${({ theme }) => theme.colors.black};
    border-radius: 0.2rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
    z-index: 1;
    flex-wrap: wrap;
    -webkit-box-shadow: 0px 0px 23px -5px #c0c7d6;
    box-shadow: 0px 0px 23px -5px #c0c7d6;
`;
