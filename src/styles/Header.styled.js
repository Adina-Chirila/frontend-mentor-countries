import styled from "styled-components";

export const StyledHeader = styled.header`
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: 0px 1px 24px -16px rgba(0, 0, 0, 0.66);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;

    @media (max-width: 620px) {
        font-size: 9px;
    }
`;

export const DarkModeBtn = styled.button`
    border: none;
    background-color: inherit;
    font-family: inherit;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    .btnSpan {
        margin-left: 0.5em;
    }

    @media (max-width: 700px) {
        font-size: 0.65rem;
        .toggle {
            font-size: 20px;
        }

        .btnSpan {
            display: none;
        }
    }
`;
