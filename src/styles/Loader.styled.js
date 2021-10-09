import styled from "styled-components";
import { keyframes } from "styled-components";

const spin = keyframes`
	to {
 		stroke-dashoffset: 1000;
	}
`;

export const Loading = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .loadingDiv {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .loadingCircle {
            width: 170px;
            height: 170px;
            fill: none;
            stroke-width: 7px;
            stroke-linecap: round;
            stroke-dasharray: 250;
            animation: ${spin} 1.2s linear infinite;
        }

        .loadingText {
            position: absolute;
        }
    }
`;
