import styled from 'styled-components';

export const SelectBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  .error {
    color: #ab3e3e;
    font: 400 1.2rem Poppins;
    margin: 0 0 10px 10px;
    font-weight: bold;
  }

  label {
    font-size: 1.4rem;
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 1.4rem;
  }
`;

export const MySelect = styled.select`
  margin-top: 0.8rem;
  margin-bottom: 1.4rem;
  padding: 0 1.6rem;
  font: 400 1.6rem Archivo;

  height: 4.2rem;
  border-radius: 0.8rem;
  outline: 0;
  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
`;
