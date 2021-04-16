import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const DataContext = React.createContext({
    symbols: [],
    companyName: "",
    companyInfo: {},
    isLoading: true,
    handleInputChange: () => {},
    handleClickSearch: () => {},
});

const DataProvider = ({ children }) => {
    const [companyName, setCompanyName] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [symbols, setSymbols] = useState([]);
    const [searchedSymbol, setSearchedSymbol] = useState("");
    const [companyInfo, setCompanyInfo] = useState({});
    const history = useHistory();

    useEffect(() => {
        if (companyName === "") {
            setSymbols([]);
            return;
        }
        if (companyName.length < 3) return;
        fetch(
            `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${companyName}&apikey=${process.env.REACT_APP_API_KEY}`
        )
            .then((response) => response.json())
            .then((data) => setSymbols(data.bestMatches))
            .catch((err) => console.log(err));
    }, [companyName]);

    useEffect(() => {
        if (symbols === undefined) setSymbols([]);
    }, [symbols]);

    useEffect(() => {
        if (!searchedSymbol) return;
        setIsLoading(true);
        fetch(
            `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${searchedSymbol}&apikey=${process.env.REACT_APP_API_KEY}`
        )
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                setCompanyInfo(data);
            })
            .catch((err) => console.log(err));
    }, [searchedSymbol]);

    const handleInputChange = (e) => {
        setCompanyName(e.target.value);
    };

    const handleClickSearch = (value) => {
        history.push(`/company/${value}`);
        if (history.location !== "/") setSymbols([]);
        setSearchedSymbol(value);
    };

    return (
        <DataContext.Provider
            value={{
                companyName,
                isLoading,
                symbols,
                companyInfo,
                handleInputChange,
                handleClickSearch,
            }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
