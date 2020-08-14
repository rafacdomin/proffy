import styled from 'styled-components';

export const TeacherFormPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 700px) {
    max-width: 1100px;
    margin: 0;
  }
`;

export const PageContent = styled.main`
  background: var(--color-box-base);
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 0 auto;
  padding-top: 6.4rem;

  @media (min-width: 700px) {
    margin-bottom: 3.2rem;
  }

  .schedule-item {
    @media (min-width: 700px) {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      column-gap: 1.6rem;
    }
  }

  label {
    color: var(--color-text-complement);
  }
`;

export const FormFieldset = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;
  margin-top: 6.4rem;

  @media (min-width: 700px) {
    padding: 0 6.4rem;
  }

  &:first-child {
    margin-top: 0;
  }

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
`;

export const FormFooter = styled.footer`
  padding: 4rem 2.4rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 6.4rem;
  max-width: 74rem;

  @media (min-width: 700px) {
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

    @media (min-width: 700px) {
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

    @media (min-width: 700px) {
      width: 20rem;
      margin-top: 0;
    }
  }
`;
