import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body,header, .card,.input,.backBtn,.themeBtn,.searchBtn {
    color: ${({ theme }) => theme.text};
  }

  body{
    background-color: ${({ theme }) => theme.body};
  }

  header, .card,.input,.backBtn,.searchBtn {
    background-color: ${({ theme }) => theme.elements};
  }

  .loadingCircle{
    stroke: ${({ theme }) => theme.text};
  }

  `;
