import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 60%;

    --color-background: #f0f0f7;
    --color-primary-lighter: #413e70;
    --color-primary-light: #292747;
    --color-primary: #2f2d51;
    --color-primary-dark: #413e70;
    --color-primary-darker: #292747;
    --color-secundary: #e3a052;
    --color-secundary-dark: #ce8a3b;
    --color-title-in-primary: #ffffff;
    --color-text-in-primary: #e3a052;
    --color-text-title: #32264d;
    --color-text-complement: #9c98a6;
    --color-text-base: #6a6180;
    --color-line-in-white: #e6e6f0;
    --color-input-background: #f8f8fc;
    --color-button-text: #ffffff;
    --color-box-base: #ffffff;
    --color-box-footer: #fafafc;
    --color-button-wpp-dark: #219653;
    --color-button-wpp: #27ae60;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--color-background);
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins;
    color: var(--color-text-base);
  }

  button{
    outline: 0;
  }

  @media (min-width: 1100px) {
    :root {
      font-size: 62.5%;
    }
  }

`;

export default GlobalStyle;
