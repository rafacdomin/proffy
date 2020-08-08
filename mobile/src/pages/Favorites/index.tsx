import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { Container, TeacherScroll } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  useFocusEffect(() => {
    loadFavs();
  });

  function loadFavs() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favTeachers = JSON.parse(response);

        setFavorites(favTeachers);
      }
    });
  }

  return (
    <Container>
      <PageHeader title="Meus Proffys favoritos" />

      <TeacherScroll
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((fav: Teacher) => (
          <TeacherItem key={fav.id} teacher={fav} favorited />
        ))}
      </TeacherScroll>
    </Container>
  );
};

export default Favorites;
