import { FaExclamation } from "react-icons/fa";
import { Error } from "../../styles/ErrorAlert.styled";

const ErrorAlert = () => {
    return (
        <Error>
            <FaExclamation size="50" />
            <div> Oops! Something went wrong. Please try again later.</div>
        </Error>
    );
};

export default ErrorAlert;
