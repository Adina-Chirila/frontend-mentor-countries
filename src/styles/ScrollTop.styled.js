import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from{
        opacity:0;
    }
    to {
        opacity: 1;
    }
`;

export const GoTop = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 0.5em;
    cursor: pointer;
    z-index: 999;
    transform: all 1.2s ease-in-out;
    animation: ${fadeIn} 1.2s linear forwards;
`;
