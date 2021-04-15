import styled from "styled-components";

export const Input = styled.input`
    width: inherit;
    height: inherit;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 0.2rem;
    padding-left: 1rem;
    outline: none;
`;
