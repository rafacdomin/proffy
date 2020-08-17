import styled from 'styled-components';
import BG from '../../assets/images/bg.svg';

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1100px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'logo content';
  }
`;

export const LogoContent = styled.header`
  width: 100vw;
  height: 40vh;
  background-image: url(${BG});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--color-primary);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  @media (min-width: 1100px) {
    grid-area: logo;
    background-position: center;
    background-size: contain;
    height: 100vh;
    width: 60vw;
  }

  .logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    img {
      width: 33rem;
      margin-bottom: 0.8rem;
    }

    span {
      font: 400 2.1rem Poppins;
      color: var(--color-text-in-primary);
      max-width: 20rem;
    }
  }
`;

export const LoginContent = styled.main`
  width: 90vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1100px) {
    grid-area: content;
    height: 100vh;
    width: 40vw;
    justify-content: center;
  }

  form {
    margin-top: 2rem;
    width: 100%;
    max-width: 350px;

    @media (min-width: 1100px) {
      align-items: center;
    }

    h1 {
      font-weight: normal;
      font: 600 3.6rem Poppins;
      color: var(--color-text-title);
      margin-bottom: 2.4rem;
    }

    .inputs {
      background: var(--color-input-background);
      border-radius: 0.8rem;
      border: 1px solid var(--color-line-in-white);
      margin-bottom: 2.4rem;
    }

    .login-options {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 3rem;

      a {
        text-decoration: none;
        font: 400 14px Poppins;
        color: var(--color-text-complement);

        opacity: 1;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.6;
        }
      }
    }

    .submit-button {
      width: 100%;
      height: 5.6rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 0;
      outline: 0;
      border-radius: 0.8rem;
      color: var(--color-button-text);
      background: var(--color-secundary);
      margin-bottom: 4rem;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: var(--color-secundary-dark);
      }
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  max-width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font: 400 16px Poppins;

  @media (min-width: 1100px) {
    align-items: center;
  }

  span {
    max-width: 20rem;
    color: var(--color-primary);

    a {
      font-weight: bold;
      color: var(--color-primary);
      opacity: 1;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  span + span {
    font-size: 1.4rem;
    color: var(--color-text-complement);
  }
`;
