import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #2f2d51;
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const LandingImg = styled.Image`
  width: 100%;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-family: Poppins_400Regular;
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 30px;
`;

export const TitleBold = styled.Text`
  font-family: Poppins_600SemiBold;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const Button = styled(RectButton)<{ color: string }>`
  height: 150px;
  width: 48%;
  background: ${(props) => props.color};
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 20px;
`;

export const TotalText = styled.Text`
  font-family: Poppins_400Regular;
  color: #f5b265;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;
