import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  justify-content: flex-end;
  padding: 40px;
  background: #2f2d51;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled(BorderlessButton)``;

export const Title = styled.Text`
  font: 24px Archivo_700Bold;
  color: #fff;
  line-height: 32px;
  max-width: 160px;
  margin: 40px 0;
`;
