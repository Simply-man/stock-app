import React, { useContext } from "react";
import { Title } from "../../atoms/Title/Title";
import { Subtitle } from "../../atoms/Subtitle/Subtitle";
import { DataContext } from "../../../providers/DataProvider";
import {
    Wrapper,
    StyledInfoCard,
    StyledDescription,
} from "./CompanyInfo.styles";

const CompanyInfo = () => {
    const { companyInfo, isLoading } = useContext(DataContext);
    const lengthCompanyInfo = Object.keys(companyInfo).length;

    return (
        <Wrapper>
            {lengthCompanyInfo <= 1 && <div>No company info...</div>}
            {isLoading ? (
                <div>Loading info about company...</div>
            ) : (
                lengthCompanyInfo > 1 && (
                    <>
                        <Title>{companyInfo.Name}</Title>
                        <StyledInfoCard>
                            <div>
                                <Subtitle>Symbol:</Subtitle>{" "}
                                {companyInfo.Symbol}
                                <Subtitle>Sector: </Subtitle>{" "}
                                {companyInfo.Sector}
                                <Subtitle>Description:</Subtitle>
                                <StyledDescription>
                                    {companyInfo.Description}
                                </StyledDescription>
                            </div>
                            <div>
                                <Subtitle>Currency: </Subtitle>{" "}
                                {companyInfo.Currency}
                                <Subtitle>Country: </Subtitle>{" "}
                                {companyInfo.Country}
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
                )
            )}
        </Wrapper>
    );
};

export default CompanyInfo;
