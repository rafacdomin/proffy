import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Image, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import {
  Container,
  TeacherScroll,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  FilterButton,
  FilterButtonText,
  Line,
  SubmitContainer,
  SubmitButton,
  SubmitText,
  ClearButton,
  Trash,
} from './styles';

import { Ionicons } from '@expo/vector-icons';
import filterIcon from '../../assets/images/icons/filter.png';
import selectIcon from '../../assets/images/icons/Select.png';
const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [classes, setClasses] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    async function loadClasses() {
      const response = await api.get('classes');

      setClasses(response.data);
    }

    loadClasses();
    loadFavs();
  }, []);

  function loadFavs() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favTeachers = JSON.parse(response);
        const Ids = favTeachers.map((teacher: Teacher) => teacher.id);

        setFavorites(Ids);
      }
    });
  }

  function handleFilterButtonClick() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleClear() {
    setSubject('');
    setWeekDay('');
    setTime('');

    loadFavs();
    Keyboard.dismiss();
    setIsFiltersVisible(!isFiltersVisible);

    const response = await api.get('classes');

    setClasses(response.data);
  }

  async function handleSubmit() {
    loadFavs();
    Keyboard.dismiss();
    setIsFiltersVisible(!isFiltersVisible);

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setClasses(response.data);
  }

  return (
    <Container>
      <PageHeader title="Proffys disponíveis">
        <FilterButton onPress={handleFilterButtonClick}>
          <Image source={filterIcon} />
          <FilterButtonText>Filtrar por dia, hora e matéria</FilterButtonText>
          <Image source={selectIcon} />
        </FilterButton>
        <Line />
        {isFiltersVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <Input
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder="Qual a matéria?"
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                  placeholder="Qual o dia?"
                />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder="Qual horário?"
                />
              </InputBlock>
            </InputGroup>

            <SubmitContainer>
              <SubmitButton onPress={handleSubmit}>
                <SubmitText>Filtrar</SubmitText>
              </SubmitButton>

              <ClearButton onPress={handleClear}>
                <Ionicons name="md-trash" size={24} color="white" />
              </ClearButton>
            </SubmitContainer>
          </SearchForm>
        )}
      </PageHeader>

      <TeacherScroll
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {classes.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </TeacherScroll>
    </Container>
  );
};

export default TeacherList;
