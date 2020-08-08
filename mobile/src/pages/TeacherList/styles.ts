import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #f0f0f7;
`;

export const FilterButton = styled.TouchableOpacity`
  margin-top: -10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const FilterButtonText = styled.Text`
  color: #f5b265;
  font: 16px Archivo_400Regular;
`;

export const Line = styled.View`
  height: 1px;
  border: 1px solid #eee;
  flex: 1;
  margin-bottom: 20px;
  opacity: 0.1;
`;

export const SearchForm = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  color: #f5b265;
  font-family: Poppins_400Regular;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#c1bccc',
})`
  height: 54px;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const SubmitContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SubmitButton = styled(RectButton)`
  background: #f5b265;
  width: 75%;
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font: 16px Archivo_700Bold;
`;

export const Trash = styled.Image`
  width: 24px;
  height: 24px;
`;

export const ClearButton = styled(SubmitButton)`
  background: #ab3e3e;
  width: 20%;
  flex-direction: column;
`;

export const TeacherScroll = styled.ScrollView`
  margin-top: -40px;
`;
