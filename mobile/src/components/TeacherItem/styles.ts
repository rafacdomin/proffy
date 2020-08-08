import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #fff;
  border: 1px solid #e5e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const ProfileName = styled.Text`
  font: 20px Archivo_700Bold;
  color: #32264d;
`;

export const Subject = styled.Text`
  font: 12px Poppins_400Regular;
  color: #6a6186;
  margin-top: 4px;
`;

export const Bio = styled.Text`
  margin: 0 24px;
  font: 14px/24px Poppins_400Regular;
  color: #6a6180;
`;

export const Footer = styled.View`
  background: #fafafc;
  padding: 24px;
  align-items: center;
  margin-top: 24px;
`;

export const Price = styled.Text`
  font: 14px Poppins_400Regular;
  color: #6a6180;
`;

export const PriceValue = styled.Text`
  font: 16px Archivo_700Bold;
  color: #2f2d51;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const FavButton = styled(RectButton)<{ favorited?: Boolean }>`
  background: ${(props) => (props.favorited ? '#AB3E3E' : '#2F2D51')};
  width: 56px;
  height: 56px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

export const ContactButton = styled(FavButton)`
  background: #219653;
  flex: 1;
  flex-direction: row;
`;

export const ContactText = styled.Text`
  color: #fff;
  font: 16px Archivo_700Bold;
  margin-left: 16px;
`;
