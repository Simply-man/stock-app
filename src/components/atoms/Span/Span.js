import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const StyledSpan = styled.span`
    display: inline-block;
    padding: 0.5rem 0;
`;

const Span = ({ value }) => {
    return <StyledSpan>{value}</StyledSpan>;
};

Span.porpTypes = {
    value: PropTypes.string.isRequired,
};

export default Span;
