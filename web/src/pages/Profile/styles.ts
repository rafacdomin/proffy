import styled from 'styled-components';

import bg from '../../assets/images/Background.svg';
import camera from '../../assets/images/icons/camera.svg';

export const ProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

export const BG = styled.div`
  height: 35rem;

  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const ProfileContent = styled.div`
  width: 100%;
`;

export const AvatarFieldset = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -40rem;
  position: sticky;

  &::after {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    content: '';
    position: absolute;
    background: var(--color-secundary);
    background-image: url(${camera});
    background-repeat: no-repeat;
    background-position: center;
    margin-left: 12rem;
    margin-bottom: 1.6rem;
  }

  @media (min-width: 1100px) {
    margin-top: -38rem;
  }

  img {
    height: 18rem;
    width: 18rem;
    border-radius: 50%;
    margin-bottom: 3.2rem;
    position: relative;
  }

  h1 {
    font: 700 3.6rem Archivo;
    color: var(--color-title-in-primary);
    margin-bottom: 0.6rem;
  }

  span {
    font: 400 2.4rem Poppins;
    color: var(--color-text-in-primary);
    margin-bottom: 6.4rem;

    @media (min-width: 1100px) {
      margin-bottom: 3.4rem;
    }
  }
`;

export const FormFields = styled.div`
  background: var(--color-box-base);
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: 0 auto;
  padding-top: 3.2rem;

  @media (min-width: 1100px) {
    margin-bottom: 3.2rem;
  }

  fieldset {
    border: 0;
    padding: 0 2.4rem;
    padding-bottom: 6.4rem;

    legend {
      font: 700 2.4rem Archivo;
      color: var(--color-text-title);
      margin-bottom: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid var(--color-line-in-white);

      button {
        background: none;
        border: 0;
        color: var(--color-primary);
        font: 700 1.6rem Archivo;
        cursor: pointer;
        transition: color 0.2s;

        &:hover {
          color: var(--color-primary-dark);
        }
      }
    }

    .contactfields {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (min-width: 1100px) {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        grid-gap: 16px;
      }

      input {
        width: 16rem;

        @media (min-width: 1100px) {
          width: 100%;
        }
      }

      select {
        width: 16rem;

        @media (min-width: 1100px) {
          width: 100%;
        }
      }
    }

    .subjectfields {
      @media (min-width: 1100px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 16px;
      }

      input {
        width: 16rem;

        @media (min-width: 1100px) {
          width: 100%;
        }
      }

      select {
        width: 16rem;

        @media (min-width: 1100px) {
          width: 100%;
        }
      }
    }

    .fields {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (min-width: 1100px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;
      }

      input {
        width: 16rem;

        @media (min-width: 1100px) {
          width: 100%;
        }
      }

      select {
        width: 16rem;

        @media (min-width: 1100px) {
          width: 100%;
        }
      }
    }

    .schedule-item {
      width: 100%;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid var(--color-line-in-white);
      margin-bottom: 5.6rem;

      @media (min-width: 1100px) {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        column-gap: 1.6rem;
        align-items: center;
      }

      input {
        width: 100%;
      }

      select {
        width: 100%;
      }

      button {
        align-self: center;
        margin-bottom: -1.2rem;
        width: 14rem;
        background: var(--color-box-base);
        color: #ab3e3e;
        border: 0;
        outline: 0;
        cursor: pointer;

        @media (min-width: 1100px) {
          justify-self: flex-end;
          margin-right: -80px;
        }
      }
    }
  }
`;

export const FormFooter = styled.footer`
  padding: 4rem 2.4rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  max-width: 74rem;

  @media (min-width: 1100px) {
    padding: 4rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);

    @media (min-width: 1100px) {
      justify-content: space-between;
    }

    img {
      margin-right: 2rem;
    }
  }

  button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-secundary);
    margin-top: 3.2rem;
    border: 0;
    outline: 0;
    cursor: pointer;
    border-radius: 0.8rem;
    font: 700 1.6rem Archivo;
    color: var(--color-button-text);

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--color-secundary-dark);
    }

    @media (min-width: 1100px) {
      width: 20rem;
      margin-top: 0;
    }
  }
`;
