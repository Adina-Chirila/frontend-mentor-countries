import { FaArrowCircleUp } from "react-icons/fa";
import { GoTop } from "../../styles/ScrollTop.styled";

const ScrollTop = ({ scrollToTop }) => {
    return (
        <GoTop>
            <FaArrowCircleUp onClick={scrollToTop} size="30" />
        </GoTop>
    );
};

export default ScrollTop;
