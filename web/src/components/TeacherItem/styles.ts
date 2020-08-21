import styled from 'styled-components';

interface DayElementProps {
  readonly disabled: boolean;
}

export const Item = styled.article`
  background: var(--color-box-base);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;

  p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;

    @media (min-width: 1100px) {
      padding: 0 3.2rem;
    }
  }

  footer {
    padding: 3.2rem 2rem;
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 1100px) {
      padding: 3.2rem;
    }

    p strong {
      color: var(--color-primary);
      font-size: 1.6rem;
      display: block;

      @media (min-width: 1100px) {
        display: initial;
        margin-left: 1.6rem;
      }
    }

    a {
      width: 20rem;
      height: 5.6rem;
      background: var(--color-button-wpp);
      color: var(--color-button-text);
      border: 0;
      border-radius: 0.8rem;
      cursor: pointer;
      font: 700 1.4rem Archivo;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      transition: 0.2s;
      text-decoration: none;

      &:hover {
        background: var(--color-button-wpp-dark);
      }

      @media (min-width: 1100px) {
        width: 24.5rem;
        font-size: 1.6rem;
        justify-content: center;
      }

      @media (min-width: 1100px) {
        img {
          margin-right: 1.6rem;
        }
      }
    }
  }
`;

export const Header = styled.header`
  padding: 3.2rem 2rem;
  display: flex;
  align-items: center;

  @media (min-width: 1100px) {
    padding: 3.2rem;
  }

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  div {
    margin-left: 2.4rem;

    strong {
      font: 700 2.4rem Archivo;
      display: block;
      color: var(--color-text-title);
    }

    span {
      font-size: 1.6rem;
      display: block;
      margin-top: 0.4rem;
    }
  }
`;

export const DayList = styled.div`
  display: flex;
  overflow-x: scroll;
  margin: 3.2rem;
  margin-bottom: 1.6rem;
`;

export const DayElement = styled.div<DayElementProps>`
  min-width: 14rem;
  max-height: 15rem;
  margin-right: 1.6rem;
  margin-bottom: 1.6rem;
  padding: 1.6rem;
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  span {
    font: 400 1.2rem/2rem Poppins;
    color: var(--color-text-complement);
  }

  h1 {
    font-weight: normal;
    font: 700 1.6rem/2.6rem Archivo;
    color: var(--color-text-base);

    &:first-of-type {
      margin-bottom: 1.2rem;
    }
  }
`;
