import React from "react";
import styled from "styled-components";
import { Title } from "../../atoms/Title/Title";
import { Subtitle } from "../../atoms/Subtitle/Subtitle";

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

const CompanyInfo = () => {
    return (
        <Wrapper>
            <Title>International Business Machines Corporation</Title>
            <StyledInfoCard>
                <div>
                    <Subtitle>Symbol:</Subtitle> IBM
                    <Subtitle>Sector: </Subtitle> Technology
                    <Subtitle>Description:</Subtitle>
                    <p style={{ textAlign: "justify" }}>
                        International Business Machines Corporation provides
                        integrated solutions and services worldwide. Its Cloud &
                        Cognitive Software segment offers software for vertical
                        and domain-specific solutions in health, financial
                        services, supply chain, and asset management, weather,
                        and security software and services application areas;
                        and customer information control system and storage, and
                        analytics and integration software solutions to support
                        client mission critical on-premise workloads in banking,
                        airline, and retail industries. It also offers
                        middleware and data platform software, including Red Hat
                        that enables the operation of clients' hybrid
                        multi-cloud environments; and Cloud Paks, WebSphere
                        distributed, and analytics platform software, such as
                        DB2 distributed, information integration, and enterprise
                        content management, as well as IoT, Blockchain and
                        AI/Watson platforms. The company's Global Business
                        Services segment offers business consulting services;
                        system integration, application management, maintenance,
                        and support services for packaged software; and finance,
                        procurement, talent and engagement, and
                        industry-specific business process outsourcing services.
                        Its Global Technology Services segment provides IT
                        infrastructure and platform services; and project,
                        managed, outsourcing, and cloud-delivered services for
                        enterprise IT infrastructure environments; and IT
                        infrastructure support services. The company's Systems
                        segment offers servers for businesses, cloud service
                        providers, and scientific computing organizations; data
                        storage products and solutions; and z/OS, an enterprise
                        operating system, as well as Linux. Its Global Financing
                        segment provides lease, installment payment, loan
                        financing, short-term working capital financing, and
                        remanufacturing and remarketing services. The company
                        was formerly known as Computing-Tabulating-Recording Co.
                        The company was incorporated in 1911 and is
                        headquartered in Armonk, New York.
                    </p>
                </div>
                <div>
                    <Subtitle>Currency: </Subtitle> USD
                    <Subtitle>Country: </Subtitle> USA
                    <Subtitle>Fulltime employees: </Subtitle> 345900
                    <Subtitle>Market capitalization: </Subtitle> $121287507968
                    <Subtitle>Analyst target price: </Subtitle> $138.47
                    <Subtitle>Profit margin: </Subtitle> $0.0759
                    {/* <Subtitle>Timezone: </Subtitle> UTC-02
                            <Subtitle>Market open: </Subtitle> 08:00
                            <Subtitle>Market close: </Subtitle> 20:00 */}
                </div>
            </StyledInfoCard>
        </Wrapper>
    );
};

export default CompanyInfo;
