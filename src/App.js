import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import CountryCard from "./components/CountryCard/CountryCard";
import Loader from "./components/Loader/Loader";
import { CountryCards } from "./styles/Global.styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryInfo from "./components/CountryInfo/CountryInfo";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";
import { GlobalStyles } from "./styles/Global";
import ErrorAlert from "./components/ErrorAlert/ErrorAlert";
import ScrollTop from "./components/ScrollTop/ScrollTop";

const App = () => {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCountry, setSelectedCountry] = useState([]);
    const [theme, setTheme] = useState("light");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [topArrow, setTopArrow] = useState(false);

    const fetchCountries = () => {
        const url = "https://restcountries.com/v2/all";
        updateSelectedFromLocal();
        setError(false);
        axios
            .get(url)
            .then((resp) => {
                setCountries(resp.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                setError(true);
            });
    };

    const checkScrollTop = () => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setTopArrow(true);
            } else {
                setTopArrow(false);
            }
        });
    };

    useEffect(() => {
        setLoading(true);
        fetchCountries();
        checkScrollTop();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
    };

    const handleClick = (countryId) => {
        const selectedCountry = countries.filter((country) => {
            return country.alpha2Code === countryId;
        });

        setSelectedCountry(selectedCountry);
        saveCountryLocal(selectedCountry);
    };

    const getLocalItem = (item) => {
        return localStorage.getItem(item)
            ? JSON.parse(localStorage.getItem(item))
            : [];
    };

    const saveCountryLocal = (country) => {
        getLocalItem("selectedCountry");
        localStorage.setItem("selectedCountry", JSON.stringify(country));
    };

    const saveThemeLocal = (theme) => {
        getLocalItem("selectedTheme");
        localStorage.setItem("selectedTheme", JSON.stringify(theme));
    };

    const updateSelectedFromLocal = () => {
        const localCountry = localStorage.getItem("selectedCountry");
        const localTheme = localStorage.getItem("selectedTheme");

        localCountry &&
            setSelectedCountry(
                JSON.parse(localStorage.getItem("selectedCountry"))
            );

        localTheme &&
            setTheme(JSON.parse(localStorage.getItem("selectedTheme")));
    };

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            saveThemeLocal("dark");
        } else {
            setTheme("light");
            saveThemeLocal("light");
        }
    };

    return (
        <Router>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                <Header toggleTheme={toggleTheme} theme={theme} />
                {topArrow && (
                    <ScrollTop scrollToTop={scrollToTop} topArrow={topArrow} />
                )}
                <Switch>
                    <Route exact path="/">
                        <Search
                            searchTerm={searchTerm}
                            handleChange={handleChange}
                            handleSearch={handleSearch}
                        />

                        {loading && <Loader />}
                        {error && <ErrorAlert />}

                        {countries.length > 0 && (
                            <CountryCards>
                                {countries
                                    .filter((country) => {
                                        return country.name
                                            .toLowerCase()
                                            .includes(searchTerm.toLowerCase());
                                    })
                                    .map((country) => (
                                        <CountryCard
                                            key={country.alpha2Code}
                                            {...country}
                                            handleClick={() =>
                                                handleClick(country.alpha2Code)
                                            }
                                        />
                                    ))}
                            </CountryCards>
                        )}
                    </Route>
                    <Route path="/info">
                        <CountryInfo selectedCountry={selectedCountry} />
                    </Route>
                </Switch>
            </ThemeProvider>
        </Router>
    );
};

export default App;
