import React, { useContext } from "react";
import styled from "styled-components";
import { Title } from "../../atoms/Title/Title";
import { Subtitle } from "../../atoms/Subtitle/Subtitle";
import { DataContext } from "../../../providers/DataProvider";

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

const CompanyInfo = () => {
    const { companyInfo } = useContext(DataContext);

    return (
        <Wrapper>
            {Object.keys(companyInfo).length !== 0 ? (
                <>
                    <Title>{companyInfo.Name}</Title>
                    <StyledInfoCard>
                        <div>
                            <Subtitle>Symbol:</Subtitle> {companyInfo.Symbol}
                            <Subtitle>Sector: </Subtitle> {companyInfo.Sector}
                            <Subtitle>Description:</Subtitle>
                            <StyledDescription>
                                {companyInfo.Description}
                            </StyledDescription>
                        </div>
                        <div>
                            <Subtitle>Currency: </Subtitle>{" "}
                            {companyInfo.Currency}
                            <Subtitle>Country: </Subtitle> {companyInfo.Country}
                            <Subtitle>Fulltime employees: </Subtitle>
                            {companyInfo.FullTimeEmployees}
                            <Subtitle>Market capitalization: </Subtitle>$
                            {companyInfo.MarketCapitalization}
                            <Subtitle>Analyst target price: </Subtitle>$
                            {companyInfo.AnalystTargetPrice}
                            <Subtitle>Profit margin: </Subtitle>$
                            {companyInfo.ProfitMargin}
                        </div>
                    </StyledInfoCard>
                </>
            ) : (
                <div>Loading info about company...</div>
            )}
        </Wrapper>
    );
};

export default CompanyInfo;
