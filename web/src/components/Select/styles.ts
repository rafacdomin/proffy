import styled from 'styled-components';
import ReactSelect from 'react-select';

export const SelectBlock = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.4rem;
  }
`;

export const MySelect = styled(ReactSelect)`
  margin-top: 0.8rem;
  margin-bottom: 1.4rem;
  font: 400 1.6rem Archivo;
`;
