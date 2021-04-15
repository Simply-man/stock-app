import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import { GlobalStyles } from "../assets/styles/GlobalStyles";
import CompanyInfo from "../components/moldecules/CopmanyInfo/CompanyInfo";
import MainTemplate from "../components/templates/MainTemplate/MainTemplate";
import DataProvider from "../providers/DataProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StyledWelcomeDiv } from "../components/atoms/StyledWelcomeDiv/StyledWelcomeDiv";

const Root = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <DataProvider>
                    <MainTemplate>
                        <Switch>
                            <Route path="/company/:id" exact={true}>
                                <CompanyInfo />
                            </Route>
                            <Route path="/" exact={true}>
                                <StyledWelcomeDiv>
                                    Welcome on stock market. Search for
                                    intresting stock :)
                                </StyledWelcomeDiv>
                            </Route>
                        </Switch>
                    </MainTemplate>
                </DataProvider>
            </ThemeProvider>
        </Router>
    );
};

export default Root;
