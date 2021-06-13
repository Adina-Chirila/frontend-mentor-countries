import { FaMoon, FaRegMoon } from "react-icons/fa";
import { DarkModeBtn, StyledHeader } from "../../styles/Header.styled";
import { Container } from "../../styles/Global.styled";
import { useState, useEffect } from "react";

const Header = ({ toggleTheme }) => {
	const [mode, setMode] = useState(false);

	const handleClick = () => {
		setMode(!mode);
	};

	return (
		<StyledHeader>
			<Container>
				<h1>Where in the world?</h1>
				<DarkModeBtn
					className="themeBtn"
					onClick={toggleTheme}
					// onClick={handleClick}
					// style={
					// 	mode ? { backgroundColor: "white" } : { backgroundColor: "pink" }
					// }
				>
					<FaRegMoon />
					{/* <FaMoon /> */}
					<span className="btnSpan">Dark mode</span>
				</DarkModeBtn>
			</Container>
		</StyledHeader>
	);
};

export default Header;
