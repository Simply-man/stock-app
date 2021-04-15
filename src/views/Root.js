import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import { GlobalStyles } from "../assets/styles/GlobalStyles";
import CompanyInfo from "../components/moldecules/CopmanyInfo/CompanyInfo";
import MainTemplate from "../components/templates/MainTemplate/MainTemplate";
import DataProvider from "../providers/DataProvider";

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <DataProvider>
                <MainTemplate>
                    <CompanyInfo />
                </MainTemplate>
            </DataProvider>
        </ThemeProvider>
    );
};

export default Root;
