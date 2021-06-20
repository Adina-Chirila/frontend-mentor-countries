import { FaRegMoon } from "react-icons/fa";
import { DarkModeBtn, StyledHeader } from "../../styles/Header.styled";
import { Container } from "../../styles/Global.styled";

const Header = ({ toggleTheme }) => {
	return (
		<StyledHeader>
			<Container>
				<h1>Where in the world?</h1>
				<DarkModeBtn className="themeBtn" onClick={toggleTheme}>
					<FaRegMoon />
					<span className="btnSpan">Dark mode</span>
				</DarkModeBtn>
			</Container>
		</StyledHeader>
	);
};

export default Header;
