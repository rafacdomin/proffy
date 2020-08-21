import styled from 'styled-components';
import { Form } from '@unform/web';
import Pagination from '@material-ui/lab/Pagination';

export const ListPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

export const SearchTeacher = styled(Form)`
  margin-top: 4.8rem;
  color: var(--color-text-in-primary);
  font: 400 1.4rem Poppins;

  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 1fr;
    grid-gap: 1.6rem;
    align-items: center;
    margin-bottom: -8.4rem;
  }

  button {
    height: 4.2rem;
    width: 100%;
    margin-top: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-secundary);
    color: var(--color-button-text);
    font: 700 1.4rem Archivo;
    border: 0;
    outline: 0;
    cursor: pointer;
    border-radius: 0.8rem;
    transition: background 0.2s;

    &:hover {
      background: var(--color-secundary-dark);
    }

    @media (min-width: 1100px) {
      margin-top: 1.2rem;
    }
  }
`;

export const List = styled.main`
  width: 100%;
  max-width: 74rem;
  margin-top: -4.6rem;
  margin-bottom: 3.2rem;

  @media (min-width: 1100px) {
    margin-top: 4rem;
  }
`;

export const Pages = styled(Pagination)`
  align-self: center;
  justify-self: center;
  margin-bottom: 2.4rem;
`;
