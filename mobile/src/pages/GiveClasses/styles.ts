import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #2f2d51;
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font: 32px Archivo_700Bold;
  color: #fff;
  line-height: 37px;
  max-width: 180px;
`;

export const Description = styled.Text`
  margin-top: 24px;
  color: #f5b265;
  font: 16px Poppins_400Regular;
  line-height: 26px;
  max-width: 240px;
`;

export const Button = styled(RectButton)`
  margin: 40px 0;
  background: #e3a052;
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font: 16px Archivo_700Bold;
`;
