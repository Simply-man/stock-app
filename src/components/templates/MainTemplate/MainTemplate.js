import React from "react";
import SearchBar from "../../moldecules/SearchBar/SearchBar";
import { Wrapper } from "./MainTemplate.styles";
import { Title } from "../../atoms/Title/Title";

const MainTemplate = ({ children }) => {
    return (
        <Wrapper>
            <Title>Stock market</Title>
            <SearchBar />
            {children}
        </Wrapper>
    );
};

export default MainTemplate;
