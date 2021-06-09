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

	/* grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: auto; */
	/* grid-gap: 1rem; */

	border: 1px solid red;
`;
