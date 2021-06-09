import {
	CountryDetails,
	ImgWrapper,
	StyledCountryInfo,
	StyledMainInfo,
	CountryFlag,
	DetailsWrapper,
	BackBtn,
} from "../../styles/CountryInfo.styled";
import { FaArrowLeft } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const CountryInfo = ({ selectedCountry }) => {
	const {
		name,
		nativeName,
		flag,
		population,
		region,
		subregion,
		capital,
		borders,
		topLevelDomain,
		currencies,
		languages,
	} = selectedCountry[0] || {};

	return (
		<StyledCountryInfo>
			<Link to="/">
				<BackBtn>
					<FaArrowLeft />
					<span className="styledSpan">Back</span>
				</BackBtn>
			</Link>
			<StyledMainInfo>
				<ImgWrapper>
					<CountryFlag flagSrc={flag} />
				</ImgWrapper>
				<CountryDetails>
					<h1>{name}</h1>
					<DetailsWrapper>
						<div className="detailsColumn">
							<p>
								<span className="bold">Native Name:</span> {nativeName}
							</p>
							<p>
								<span className="bold">Population:</span> {population}
							</p>
							<p>
								<span className="bold">Region:</span> {region}
							</p>
							<p>
								<span className="bold">Sub Region:</span> {subregion}
							</p>
							<p>
								<span className="bold">Capital:</span> {capital}
							</p>
						</div>
						<div className="detailsColumn">
							<p>
								<span className="bold">Top level domain:</span>
								{topLevelDomain.map((domain) => domain)}
							</p>
							<p>
								<span className="bold">Currencies:</span>
								{currencies.map((currency) => currency.name)}
							</p>
							<p>
								<span className="bold">Languages:</span>
								{languages.map((language) => language.name)}
							</p>
						</div>
					</DetailsWrapper>
					<div className="borderCountries">
						<p className="bold">Border Countries:</p>
						{borders.map((border) => {
							return (
								<p className="border" key={border}>
									{border}
								</p>
							);
						})}
					</div>
				</CountryDetails>
			</StyledMainInfo>
		</StyledCountryInfo>
	);
};

export default CountryInfo;
