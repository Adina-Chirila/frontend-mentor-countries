import {
	StyledCountryCard,
	CountryFlag,
} from "../../styles/CountryCard.styled";
import { Link } from "react-router-dom";
import { formatNumber } from "../../utils/numberUtils";

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
			<StyledCountryCard onClick={handleClick} className="card">
				<div>
					<CountryFlag flagSrc={flag} />
				</div>
				<div className="countryBody">
					<h3 className="margin">{name}</h3>
					<p>
						<span className="bold">Population:</span> {formatNumber(population)}
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
