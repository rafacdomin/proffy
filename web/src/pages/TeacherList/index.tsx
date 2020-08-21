import React, { useState, useEffect } from 'react';

import { SubmitHandler } from '@unform/core';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import { ListPage, SearchTeacher, List, Pages } from './styles';
import emoji from '../../assets/images/icons/emoji.svg';

interface FormData {
  subject: string;
  week_day: number;
  time: string;
}

export default function TeacherList() {
  const [classes, setClasses] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  useEffect(() => {
    async function loadClasses() {
      const response = await api.get('classes', {
        params: {
          page,
        },
      });

      setClasses(response.data.Teachers);
      setCount(response.data.count);
    }

    loadClasses();
  }, [page]);

  const searchTeachers: SubmitHandler<FormData> = async ({
    subject,
    week_day,
    time,
  }) => {
    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setClasses(response.data.Teachers);
    setCount(response.data.pages);
  };

  function handlePageCounter(pageNumber: number) {
    setPage(pageNumber);
  }

  return (
    <ListPage>
      <PageHeader
        title="Estes são os proffys disponíveis."
        Message={() => (
          <div className="message">
            <img src={emoji} alt="emoji" />
            <span>Nós temos {count} professores</span>
          </div>
        )}
      >
        <SearchTeacher onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'História', label: 'História' },
              { value: 'Português', label: 'Português' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Física', label: 'Física' },
              { value: 'Química', label: 'Química' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Filosofia', label: 'Filosofia' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input type="time" name="time" label="Hora" />

          <button type="submit">Buscar</button>
        </SearchTeacher>
      </PageHeader>

      <List>
        {classes.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </List>
      <Pages
        count={count < 10 ? 1 : Math.round(count / 10)}
        page={page}
        size="large"
        onChange={(event, page) => handlePageCounter(page)}
      />
    </ListPage>
  );
}
