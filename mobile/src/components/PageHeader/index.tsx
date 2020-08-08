import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, TopBar, BackButton, Title } from './styles';
import { Image } from 'react-native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('Landing');
  }

  return (
    <Container>
      <TopBar>
        <BackButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BackButton>

        <Image source={logoImg} resizeMode="contain" />
      </TopBar>

      <Title>{title}</Title>

      {children}
    </Container>
  );
};

export default PageHeader;
