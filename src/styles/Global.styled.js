import styled from "styled-components";

export const Container = styled.div`
	max-width: 1200px;
	width: 80%;
	margin: 0 auto;
	/* position: relative; */
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CountryCards = styled.div`
	max-width: 1200px;
	width: 81.5%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, auto);
	justify-content: space-between;

	@media (max-width: 1050px) {
		grid-template-columns: repeat(2, auto);
	}

	@media (max-width: 930px) {
		grid-template-columns: repeat(1, auto);
		justify-content: center;
	}

	/* grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: auto; */
	/* grid-gap: 1rem; */
`;
