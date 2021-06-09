import styled from "styled-components";

export const StyledCountryInfo = styled.div`
	width: 80%;
	margin: 0 auto;
	border: 1px solid red;
`;

export const BackBtn = styled.button`
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
	background-color: white;
	border-radius: 0.25em;
	padding: 0.6em 1.75em;
	border: none;
	margin: 2em 0;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;

	.styledSpan {
		margin-left: 0.5em;
		font-size: 1rem;
	}
`;

export const StyledMainInfo = styled.div`
	border: 1px solid blue;
	display: flex;
	height: 60vh;
`;

export const ImgWrapper = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
`;

export const CountryDetails = styled.div`
	border: 1px solid pink;
	flex: 1;
	margin-left: 5em;
	display: flex;
	justify-content: center;
	flex-direction: column;

	.borderCountries {
		display: flex;
		align-items: center;

		.bold {
			font-weight: 600;
		}

		.border {
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
			padding: 0.25em 1em;
			border-radius: 0.25em;
			margin-left: 0.5em;
		}
	}
`;

export const DetailsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	.detailsColumn {
		line-height: 0.7;
	}

	.bold {
		font-weight: 600;
	}
`;

export const CountryFlag = styled.img.attrs((props) => ({
	src: props.flagSrc,
}))`
	object-fit: cover;
	width: 600px;
	max-width: 100%;
`;
