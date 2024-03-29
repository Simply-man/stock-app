import React, { useContext } from "react";
import { DataContext } from "../../../providers/DataProvider";
import {
    Wrapper,
    WrapperSearchAnswersList,
    SearchAnswersList,
} from "./SearchBar.styles";
import { Input } from "../../atoms/Input/Input";
import Span from "../../atoms/Span/Span";

const SearchBar = () => {
    const {
        companyName,
        handleInputChange,
        symbols,
        handleClickSearch,
    } = useContext(DataContext);

    return (
        <Wrapper>
            <Input
                type="text"
                name="search"
                id="search"
                value={companyName}
                onChange={handleInputChange}
                placeholder="Enter company name"
            />

            <WrapperSearchAnswersList>
                {symbols !== undefined &&
                    symbols.length !== 0 &&
                    symbols.map((item, index) => (
                        <SearchAnswersList
                            key={index}
                            onClick={() =>
                                handleClickSearch(item["1. symbol"])
                            }>
                            <Span value={item["1. symbol"]} />
                            <Span value={item["2. name"]} />
                        </SearchAnswersList>
                    ))}
            </WrapperSearchAnswersList>
        </Wrapper>
    );
};

export default SearchBar;
