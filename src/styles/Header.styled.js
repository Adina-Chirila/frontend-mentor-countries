import styled from "styled-components";

export const StyledHeader = styled.header`
	padding-top: 10px;
	padding-bottom: 10px;
	box-shadow: 0px 1px 24px -16px rgba(0, 0, 0, 0.66);
	background-color: white;
	/* position: fixed;
	width: 100%;
	z-index: 999; */
`;

export const DarkModeBtn = styled.button`
	border: none;
	background-color: white;
	font-family: inherit;
	font-size: 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: 600;

	&:focus {
		outline: none;
	}

	.btnSpan {
		margin-left: 0.5em;
	}
`;
