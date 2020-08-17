import styled from 'styled-components';

export const InputBlock = styled.div`
  position: relative;
  width: 100%;
  border-top: 1px solid var(--color-line-in-white);
  margin: 0;

  &:first-child {
    border-top: unset;
    margin: unset;
  }

  &:focus-within::after {
    width: 1.5px;
    height: calc(100% - 1.6rem);
    content: '';
    background: var(--color-primary);
    position: absolute;
    left: 0;
    top: 0.8rem;
    bottom: 0.8;
    border-radius: 0.8rem;
  }

  label {
    position: absolute;
    pointer-events: none;
    font-size: 1.4rem;
    padding: 0 1.2rem;
    font: 1.6rem Archivo;
    color: var(--color-text-complement);

    transform-origin: top left;
    transform: translate(0, 2rem) scale(1);

    transition: all 0.2s ease-out;
  }

  .Active {
    transform: translate(0, 12px) scale(0.75);
  }

  &:focus-within label {
    transform: translate(0, 12px) scale(0.75);
  }

  input {
    width: 100%;
    height: 5.6rem;
    background: var(--color-input-background);
    border: 0;
    outline: 0;
    padding: 1.4rem 1.6rem 0 1rem;
    font: 1.6rem Archivo;
  }

  .input {
    display: flex;

    button {
      background: none;
      border: none;
      margin-right: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: 0;
      cursor: pointer;
    }
  }

  .error {
    color: #ab3e3e;
    font: 400 1.2rem Poppins;
    margin: 0 0 10px 10px;
    font-weight: bold;
  }
`;
