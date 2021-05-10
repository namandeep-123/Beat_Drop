import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-family: "Lato", sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  h1,
  h2,
  h3,
  h4{
    color: ${({ theme }) => theme.text};

  }
  button{
    color: ${({ theme }) => theme.text};

  }
  .library{
    background: ${({ theme }) => theme.body};
    box-shadow : none;
  }`;
