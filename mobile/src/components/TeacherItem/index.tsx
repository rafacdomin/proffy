import React, { useState } from 'react';
import { Image } from 'react-native';
import * as Linking from 'expo-linking';

import api from '../../services/api';

import {
  Container,
  Profile,
  ProfileInfo,
  ProfileName,
  Subject,
  Avatar,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  FavButton,
  ContactButton,
  ContactText,
} from './styles';

import heartIcon from '../../assets/images/icons/heart-outline.png';
import unFavIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import AsyncStorage from '@react-native-community/async-storage';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleWhatsapp() {
    api.post('connections', { user_id: teacher.id });

    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favs = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favs) {
      favoritesArray = JSON.parse(favs);
    }

    if (isFavorited) {
      //remove from favs
      const favIndex = favoritesArray.findIndex((teacherObj: Teacher) => {
        return teacherObj.id === teacher.id;
      });

      favoritesArray.splice(favIndex, 1);

      setIsFavorited(false);
    } else {
      // add to favs
      favoritesArray.push(teacher);

      setIsFavorited(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <Container>
      <Profile>
        <Avatar
          source={{
            uri: teacher.avatar,
          }}
        />

        <ProfileInfo>
          <ProfileName>{teacher.name}</ProfileName>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>{teacher.bio}</Bio>

      <Footer>
        <Price>
          Preço/hora {'   '} <PriceValue>R$ {teacher.cost},00</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavButton favorited={isFavorited} onPress={handleToggleFavorite}>
            {isFavorited ? (
              <Image source={unFavIcon} />
            ) : (
              <Image source={heartIcon} />
            )}
          </FavButton>

          <ContactButton onPress={handleWhatsapp}>
            <Image source={whatsappIcon} />
            <ContactText>Entrar em contato</ContactText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
