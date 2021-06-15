import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body,header, .card,.input,.backBtn,.themeBtn {
    color: ${({ theme }) => theme.text};
    transition: background-color 0.25s linear;
  }

  body{
    background-color: ${({ theme }) => theme.body};
  }

  header, .card,.input,.backBtn{
    background-color: ${({ theme }) => theme.elements};
  }

  `;
