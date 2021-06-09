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

		.bold {
			font-weight: 600;
		}
	}
`;

export const CountryFlag = styled.img.attrs((props) => ({
	src: props.flagSrc,
	// src: `${(props) => props.flagSrc}`,
}))`
	object-fit: cover;
	height: 220px;
	/* max-width: 100%; */
	width: 100%;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
`;
