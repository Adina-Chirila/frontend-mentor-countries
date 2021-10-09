import { FiMoon, FiSun } from "react-icons/fi";
import { DarkModeBtn, StyledHeader } from "../../styles/Header.styled";
import { Container } from "../../styles/Global.styled";

const Header = ({ toggleTheme, theme }) => {
    return (
        <StyledHeader>
            <Container>
                <h1>Where in the world?</h1>
                <DarkModeBtn className="themeBtn" onClick={toggleTheme}>
                    {theme === "light" ? (
                        <FiMoon className="toggle" />
                    ) : (
                        <FiSun className="toggle" />
                    )}
                    <span className="btnSpan">
                        {theme === "light" ? "Dark mode" : "Light mode"}
                    </span>
                </DarkModeBtn>
            </Container>
        </StyledHeader>
    );
};

export default Header;
