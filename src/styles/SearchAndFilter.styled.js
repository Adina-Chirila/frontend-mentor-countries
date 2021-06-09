import styled from "styled-components";

export const SearchFilter = styled.div`
	width: 100%;
	display: flex;
	border: 1px solid red;
	justify-content: space-between;
	margin: 4rem 0;

	/* margin: 0 auto; */
	/* margin-top: 60px;
	margin-bottom: 60px; */
`;

export const InputWrapper = styled.div`
	width: 40%;
	height: 50px;
	position: relative;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
	border-radius: 10px;
	overflow: hidden;

	.search-icon {
		position: absolute;
		top: 50%;
		left: 20px;
		transform: translate(-50%, -50%);
	}

	.form {
		height: 100%;
	}
`;

export const Input = styled.input`
	padding-left: 40px;
	width: 100%;
	height: 100%;
	outline: none;
	border: none;
`;

export const Form = styled.form`
	width: 200px;
`;

export const Select = styled.select`
	outline: none;
	border: none;
	border-radius: 10px;
	width: 100%;
	padding: 10px;
	height: 50px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
`;
