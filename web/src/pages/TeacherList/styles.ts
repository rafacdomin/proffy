import styled from 'styled-components';

export const ListPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  main {
    margin: 3.2rem auto;
    width: 90%;

    @media (min-width: 700px) {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }
  }
`;

export const SearchTeacher = styled.form`
  margin-top: 3.2rem;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 16px;
    margin-bottom: -90px;
  }

  label {
    color: var(--color-text-in-primary);
  }

  button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-secundary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 3.2rem;

    &:hover {
      background-color: var(--color-secundary-dark);
    }
  }
`;
