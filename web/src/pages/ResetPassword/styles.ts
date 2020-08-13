import styled from 'styled-components';
import background from '../../assets/images/bg.svg';

export const ResetPassPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1100px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'content logo';
  }

  header {
    margin: 0;
    min-height: 5vh;
    margin-bottom: -1rem;
    width: 100%;
    padding-left: 8vw;
    background-color: var(--color-primary);
    opacity: 1;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }

    @media (min-width: 1100px) {
      grid-area: content;
      align-self: flex-start;
      width: 40vw;
      background: none;
      padding-left: 5rem;
      max-width: 350px;
    }
  }
`;

export const LogoContent = styled.div`
  width: 100vw;
  height: 35vh;
  background-image: url(${background});
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

export const ResetPassContent = styled.main`
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
      display: flex;
      flex-direction: column;
      max-width: 33rem;

      span {
        font-weight: normal;
        margin-top: 1rem;
        font: 400 1.6rem Poppins;
        color: var(--color-text-base);
        max-width: 40rem;
      }
    }

    .inputs {
      background: var(--color-input-background);
      border-radius: 0.8rem;
      border: 1px solid var(--color-line-in-white);
      margin-bottom: 2.4rem;
    }

    .submit-button {
      width: 100%;
      height: 5.6rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 0;
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
