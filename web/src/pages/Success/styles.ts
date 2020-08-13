import styled from 'styled-components';
import bg from '../../assets/images/bg.svg';
import succesbg from '../../assets/images/success-background.svg';

export const SuccessPage = styled.div`
  background: var(--color-primary);
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vh 0vw;
  overflow: hidden;
`;

export const SuccessContent = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1100px) {
    background-image: url(${succesbg});
    background-size: contain;
  }

  img {
    width: 12rem;
    height: 12rem;
    margin-bottom: 3rem;
  }

  h1 {
    font: 700 5.4rem Archivo;
    color: var(--color-title-in-primary);
    text-align: center;
    margin-bottom: 1.4rem;
  }

  p {
    font: 400 1.6rem Poppins;
    color: var(--color-text-in-primary);
    text-align: center;
    max-width: 400px;
  }

  a {
    height: 5.6rem;
    width: 100%;
    max-width: 20rem;
    background: var(--color-secundary);
    color: var(--color-button-text);
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    outline: 0;
    border-radius: 0.8rem;
    margin-top: 8rem;
    text-decoration: none;
    transition: background 0.2s;

    &:hover {
      background: var(--color-secundary-dark);
    }
  }
`;
