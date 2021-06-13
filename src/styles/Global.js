import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  header{
    background: ${({ theme }) => theme.header};
  }

.card{
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text}; 
    
}

.input{
    background: ${({ theme }) => theme.input};
    color: ${({ theme }) => theme.text}; 
}

.themeBtn{
    color: ${({ theme }) => theme.text}; 
}

.backBtn{
    background: ${({ theme }) => theme.input};
    color: ${({ theme }) => theme.text}; 
}

  `;
