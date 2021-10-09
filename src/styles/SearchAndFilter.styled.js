import styled from "styled-components";

export const SearchBar = styled.form`
    width: 100%;
    display: flex;
    margin: 2rem 0;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);

    .searchIcon {
        font-size: 20px;
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const Input = styled.input`
    padding: 1em;
    padding-left: 40px;
    width: 100%;
    outline: none;
    border: none;
`;
