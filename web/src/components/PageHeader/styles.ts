import styled from 'styled-components';

export const TopBar = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary-darker);
  margin-bottom: 1.6rem;

  .top-bar-container {
    width: 90%;
    height: 4.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-text-in-primary);

    @media (min-width: 1100px) {
      max-width: 1100px;
    }

    a {
      height: 3.2rem;
      display: flex;
      align-items: center;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.6;
      }
    }

    h1 {
      margin-left: 25px;
      font-weight: normal;
      font: 600 1.6rem Archivo;
    }

    img {
      height: 1.6rem;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  margin: 0;
  width: 100vw;
  margin-bottom: 2.4rem;

  @media (min-width: 1100px) {
    margin-bottom: 0;
  }

  .header-content {
    position: relative;
    margin: 3.2rem 1.6rem;

    @media (min-width: 1100px) {
      max-width: 740px;
      width: 100%;
      margin: 0 auto;
      padding-bottom: 48px;
    }

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        max-width: 400px;

        strong {
          font: 700 3.6rem Archivo;
          line-height: 4.2rem;
          color: var(--color-title-in-primary);
        }

        p {
          max-width: 30rem;
          font-size: 1.6rem;
          line-height: 2.6rem;
          color: var(--color-text-in-primary);
          margin-top: 2.4rem;
        }
      }

      .message {
        display: flex;
        align-items: center;

        img {
          margin-right: 2.4rem;
        }

        span {
          max-width: 10rem;
          font: 400 1.2rem Poppins;
          color: var(--color-text-in-primary);
        }
      }
    }
  }
`;
