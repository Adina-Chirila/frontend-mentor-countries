import React from "react";
import { Loading } from "../../styles/Loader.styled";

const Loader = () => {
    return (
        <Loading>
            <div className="loadingDiv">
                <svg className="loadingCircle">
                    <circle cx="80" cy="80" r="77"></circle>
                </svg>
                <p className="loadingText">Loading...</p>
            </div>
        </Loading>
    );
};

export default Loader;
