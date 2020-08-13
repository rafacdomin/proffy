import styled from 'styled-components';

export const Container = styled.div`
  label {
    display: flex;
    align-items: center;
    font: 400 14px Poppins;
    color: var(--color-text-complement);

    .check {
      margin-right: 0.8rem;
      border-radius: 0.8rem;
      cursor: pointer;
    }
  }
`;
