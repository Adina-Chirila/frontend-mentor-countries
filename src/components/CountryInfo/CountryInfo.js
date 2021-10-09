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
import { Link } from "react-router-dom";
import { formatNumber } from "../../utils/numberUtils";

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

    const handleInvalidCurrencies = () => {
        if (currencies) {
            return currencies.filter((currency) => currency.name !== null);
        }
    };

    const filteredCurrencies = handleInvalidCurrencies();

    return (
        <StyledCountryInfo>
            <Link to="/">
                <BackBtn className="backBtn">
                    <FaArrowLeft />
                    <span className="styledSpan">Back</span>
                </BackBtn>
            </Link>
            <StyledMainInfo>
                <ImgWrapper>
                    <CountryFlag flagSrc={flag} />
                </ImgWrapper>
                {selectedCountry[0] && (
                    <CountryDetails>
                        <h1>{name}</h1>
                        <DetailsWrapper>
                            <div className="detailsColumn">
                                <p>
                                    <span className="bold">Native Name:</span>{" "}
                                    {nativeName}
                                </p>
                                <p>
                                    <span className="bold">Population:</span>{" "}
                                    {formatNumber(population)}
                                </p>
                                <p>
                                    <span className="bold">Region:</span>{" "}
                                    {region}
                                </p>
                                <p>
                                    <span className="bold">Sub Region:</span>{" "}
                                    {subregion}
                                </p>
                                <p>
                                    <span className="bold">Capital:</span>{" "}
                                    {capital}
                                </p>
                            </div>
                            <div className="detailsColumn">
                                <p>
                                    <span className="bold">
                                        Top level domain:{" "}
                                    </span>
                                    {topLevelDomain.map((domain, index) => {
                                        return topLevelDomain.length > 1 &&
                                            index < topLevelDomain.length - 1
                                            ? `${domain}, `
                                            : domain;
                                    })}
                                </p>
                                <p>
                                    <span className="bold">Currencies: </span>
                                    {filteredCurrencies.map(
                                        (currency, index) => {
                                            return filteredCurrencies.length >
                                                1 &&
                                                index <
                                                    filteredCurrencies.length -
                                                        1
                                                ? `${currency.name}, `
                                                : currency.name;
                                        }
                                    )}
                                </p>
                                <p>
                                    <span className="bold">Languages: </span>
                                    {languages.map((language, index) => {
                                        return languages.length > 1 &&
                                            index < languages.length - 1
                                            ? `${language.name}, `
                                            : language.name;
                                    })}
                                </p>
                            </div>
                        </DetailsWrapper>
                        <div className="borderCountries">
                            <p className="bold">Border Countries: </p>
                            {borders && borders.length > 0 ? (
                                borders.map((border) => {
                                    return (
                                        <p className="border" key={border}>
                                            {border}
                                        </p>
                                    );
                                })
                            ) : (
                                <p className="border">No border countries</p>
                            )}
                        </div>
                    </CountryDetails>
                )}
            </StyledMainInfo>
        </StyledCountryInfo>
    );
};

export default CountryInfo;
