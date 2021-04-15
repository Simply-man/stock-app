import React, { useState, useEffect } from "react";

export const DataContext = React.createContext({
    symbols: [],
    companyName: "",
    handleInputChange: () => {},
    handleClickSearch: () => {},
});

const DataProvider = ({ children }) => {
    const [companyName, setCompanyName] = useState("");
    const [symbols, setSymbols] = useState([]);
    const [searchedSymbol, setSearchedSymbol] = useState("");

    useEffect(() => {
        if (!companyName) return;
        fetch(
            `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${companyName}&apikey=${process.env.REACT_APP_API_KEY}`
        )
            .then((response) => response.json())
            .then((data) => setSymbols(data.bestMatches))
            .catch((err) => console.log(err));
    }, [companyName]);

    useEffect(() => {
        if (!searchedSymbol) return;
        fetch(
            `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${searchedSymbol}&apikey=${process.env.REACT_APP_API_KEY}`
        )
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }, [searchedSymbol]);

    const handleInputChange = (e) => {
        setCompanyName(e.target.value);
    };

    const handleClickSearch = (value) => {
        setSearchedSymbol(value);
    };

    return (
        <DataContext.Provider
            value={{
                companyName,
                symbols,
                handleInputChange,
                handleClickSearch,
            }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
