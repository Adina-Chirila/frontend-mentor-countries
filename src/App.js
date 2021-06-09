import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import SearchAndFilter from "./components/SearchAndFilter/SearchAndFilter";
import CountryCard from "./components/CountryCard/CountryCard";
import { CountryCards } from "./styles/Global.styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CountryInfo from "./components/CountryInfo/CountryInfo";

const App = () => {
	const [countries, setCountries] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCountry, setSelectedCountry] = useState([]);

	useEffect(() => {
		const url = "https://restcountries.eu/rest/v2/all";
		console.log("effect runs");

		const localCountry = localStorage.getItem("selectedCountry");
		// const JSLocalCountry = JSON.parse(localStorage.getItem("selectedCountry"));
		localCountry &&
			setSelectedCountry(JSON.parse(localStorage.getItem("selectedCountry")));

		axios
			.get(url)
			.then((resp) => {
				setCountries(resp.data);
				console.log("axios runs");
				// console.log(countries);
			})
			.catch((err) => {
				console.log(err);
			});
		return () => {
			console.log("clean");
		};
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

	const getLocalCountry = () => {
		return localStorage.getItem("selectedCountry")
			? JSON.parse(localStorage.getItem("selectedCountry"))
			: [];
	};

	const saveCountryLocal = (country) => {
		getLocalCountry();
		localStorage.setItem("selectedCountry", JSON.stringify(country));
	};

	return (
		<Router>
			<Header />
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
		</Router>
	);
};

export default App;
