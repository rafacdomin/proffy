import React from 'react';
import * as Linking from 'expo-linking';

import {
  Container,
  Background,
  Title,
  Description,
  Button,
  TextButton,
} from './styles';

import giveClassesBg from '../../assets/images/Background.png';
import { useNavigation } from '@react-navigation/native';

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();

  function handleAcess() {
    navigation.goBack();
  }

  return (
    <Container>
      <Background resizeMode="contain" source={giveClassesBg}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você deve se cadastrar como professor na nossa
          plataforma web
        </Description>
      </Background>

      <Button onPress={handleAcess}>
        <TextButton>Tudo Bem</TextButton>
      </Button>
    </Container>
  );
};

export default GiveClasses;
