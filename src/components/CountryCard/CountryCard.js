import {
	StyledCountryCard,
	CountryFlag,
} from "../../styles/CountryCard.styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const CountryCard = ({
	name,
	region,
	flag,
	population,
	capital,
	handleClick,
}) => {
	return (
		<Link to="/info">
			<StyledCountryCard onClick={handleClick}>
				<div>
					<CountryFlag flagSrc={flag} />
				</div>
				<div className="countryBody">
					<h4>{name}</h4>
					<p>
						<span className="bold">Population:</span> {population}
					</p>
					<p>
						<span className="bold">Region:</span> {region}
					</p>
					<p>
						<span className="bold">Capital:</span> {capital}
					</p>
				</div>
			</StyledCountryCard>
		</Link>
	);
};

export default CountryCard;
