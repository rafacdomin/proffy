import styled from 'styled-components';

export const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);

  @media (min-width: 1100px) {
    overflow: hidden;
  }

  header {
    display: flex;
    width: 90vw;
    height: 5vh;
    justify-content: space-between;
    margin: 2.4rem 0;
    max-width: 1100px;

    a {
      text-decoration: none;
      color: var(--color-text-in-primary);
      font: 400 1.4rem/3rem Poppins;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.6;
      }

      img {
        width: 3.6rem;
        height: 3.6rem;
        border-radius: 8rem;
        margin-right: 1.6rem;
      }
    }

    button {
      background: var(--color-primary-light);
      border: 0;
      outline: 0;
      width: 3.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      transition: opacity 0.2s;

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;

export const LandingContent = styled.div`
  width: 90vw;
  max-width: 700px;
  height: 55vh;

  @media (min-width: 1100px) {
    max-width: 1100px;
    height: unset;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: 'logo hero hero';
  }

  .logo-container {
    text-align: center;
    margin-bottom: 3.2rem;

    @media (min-width: 1100px) {
      grid-area: logo;
      align-self: center;
      margin: 0;
      text-align: left;
    }

    img {
      height: 10rem;
      max-width: 45rem;

      @media (min-width: 1100px) {
        height: 100%;
      }
    }

    h2 {
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 4.6rem;
      margin-top: 0.8rem;

      @media (min-width: 1100px) {
        text-align: initial;
        font-size: 3.6rem;
        max-width: 40rem;
      }
    }
  }
  img {
    width: 100%;
    max-height: 35vh;

    @media (min-width: 1100px) {
      grid-area: hero;
      justify-self: end;
      max-height: unset;
    }
  }
`;

export const Footer = styled.footer`
  padding: 1.6rem 0;
  width: 100vw;
  height: 35vh;

  font: 400 2rem Poppins;
  color: var(--color-text-base);
  background: var(--color-background);

  display: flex;
  justify-content: center;

  @media (min-width: 1100px) {
    height: unset;
  }
`;

export const Content = styled.div`
  @media (min-width: 1100px) {
    max-width: 1100px;
    display: grid;

    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'welcome total buttons';
  }

  .welcome {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 1100px) {
      grid-area: welcome;
      align-self: center;
      margin: 0;
      text-align: left;
    }

    h1 {
      font-weight: normal;
      font: 600 2rem Poppins;
    }
  }

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3.2rem 0;

    @media (min-width: 1100px) {
      grid-area: buttons;
      justify-content: flex-start;
    }

    a {
      width: 45vw;
      max-width: 30rem;
      height: 10.4rem;
      border-radius: 0.8rem;
      font: 700 2rem Archivo;

      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none;
      color: var(--color-button-text);

      transition: background-color 0.2s;

      @media (min-width: 1100px) {
        font-size: 2.4rem;
      }

      &:first-child {
        margin-right: 1.6rem;
      }

      img {
        width: 4rem;
        margin-right: 2.4rem;
      }
    }

    a.study {
      background: var(--color-primary-lighter);

      &:hover {
        background: var(--color-primary-light);
      }
    }

    a.give-classes {
      background: var(--color-secundary);

      &:hover {
        background: var(--color-secundary-dark);
      }
    }
  }

  .total-connections {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 1100px) {
      grid-area: total;
      margin-right: 5.3rem;
      text-align: right;
    }

    span {
      align-items: center;
      font-size: 1.4rem;
      color: var(--color-text-complement);
    }

    img {
      margin-left: 0.8rem;
      justify-self: center;
    }
  }
`;
