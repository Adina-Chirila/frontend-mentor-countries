import styled from "styled-components";

export const StyledCountryInfo = styled.div`
	width: 80%;
	margin: 0 auto;
`;

export const BackBtn = styled.button`
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
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

		@media (max-width: 750px) {
			font-size: 0.75rem;
		}
	}

	@media (max-width: 750px) {
		font-size: 0.75rem;
	}
`;

export const StyledMainInfo = styled.div`
	display: flex;
	min-height: 65vh;

	@media (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const ImgWrapper = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
`;

export const CountryDetails = styled.div`
	flex: 1;
	margin-left: 2.5em;
	display: flex;
	justify-content: center;
	flex-direction: column;

	.borderCountries {
		font-size: 0.8rem;
		display: flex;
		align-items: center;
		flex-wrap: wrap;

		.bold {
			font-weight: 600;
		}

		.border {
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
			padding: 0.25em 1em;
			border-radius: 0.25em;
			margin: 0 0.5em 0 0;

			&:nth-child(2) {
				margin-left: 0.5em;
			}
		}
	}

	@media (max-width: 1000px) {
		margin-left: 0;
		padding-bottom: 1em;
	}
`;

export const DetailsWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	.detailsColumn {
		font-size: 0.8rem;
		flex: 1;
	}

	.bold {
		font-weight: 600;
	}

	@media (max-width: 750px) {
		flex-direction: column;
	}
`;

export const CountryFlag = styled.img.attrs((props) => ({
	src: props.flagSrc,
}))`
	/* object-fit: cover; */
	width: 600px;
	max-width: 100%;
	/* height: 320px; */
	max-height: 100%;
`;
