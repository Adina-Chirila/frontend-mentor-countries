import styled from "styled-components";

export const StyledCountryCard = styled.div`
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
	border-radius: 10px;
	overflow: hidden;
	margin: 10px;
	cursor: pointer;
	width: 320px;

	.countryBody {
		padding: 0 2.5em 2em;
		line-height: 0.8;

		.margin {
			margin-bottom: 1.5em;
		}

		.bold {
			font-weight: 600;
		}
	}

	@media (max-width: 1200px) {
		width: 250px;
		font-size: 0.85rem;
	}

	@media (max-width: 1050px) {
		width: 350px;
		font-size: 1rem;
	}

	@media (max-width: 450px) {
		width: 100%;
		font-size: 0.85rem;
		margin: 0 0 3em 0;
	}
`;

export const CountryFlag = styled.img.attrs((props) => ({
	src: props.flagSrc,
}))`
	object-fit: cover;
	height: 220px;
	width: 100%;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
`;
