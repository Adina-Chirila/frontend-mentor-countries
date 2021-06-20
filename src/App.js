import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import SearchAndFilter from "./components/SearchAndFilter/SearchAndFilter";
import CountryCard from "./components/CountryCard/CountryCard";
import { CountryCards } from "./styles/Global.styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryInfo from "./components/CountryInfo/CountryInfo";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";
import { GlobalStyles } from "./styles/Global";

const App = () => {
	const [countries, setCountries] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCountry, setSelectedCountry] = useState([]);
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const url = "https://restcountries.eu/rest/v2/all";
		updateSelectedFromLocal();
		axios
			.get(url)
			.then((resp) => {
				setCountries(resp.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = (e) => {
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
			setSelectedCountry(JSON.parse(localStorage.getItem("selectedCountry")));

		localTheme && setTheme(JSON.parse(localStorage.getItem("selectedTheme")));
	};

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			saveThemeLocal("dark");
		} else {
			setTheme("light");
			setTheme("light");
			saveThemeLocal("light");
		}
	};

	return (
		<Router>
			<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
				<GlobalStyles />
				<Header toggleTheme={toggleTheme} />
				<Switch>
					<Route exact path="/">
						<SearchAndFilter
							searchTerm={searchTerm}
							handleChange={handleChange}
							handleSubmit={handleSubmit}
						/>

						<CountryCards>
							{countries.length > 0 &&
								countries
									.filter((country) => {
										return country.name
											.toLowerCase()
											.includes(searchTerm.toLowerCase());
									})
									.map((country) => (
										<CountryCard
											key={country.alpha2Code}
											{...country}
											handleClick={() => handleClick(country.alpha2Code)}
										/>
									))}
						</CountryCards>
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
