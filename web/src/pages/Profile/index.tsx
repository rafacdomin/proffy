import React, { useRef, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import Input from '../../components/Input';

import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import { UserData, useAuth } from '../../contexts/auth';

import {
  ProfilePage,
  BG,
  ProfileContent,
  AvatarFieldset,
  FormFields,
  FormFooter,
} from './styles';

import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

interface FormData {
  name: string;
  lastname: string;
  email: string;
  bio: string;
  whatsapp: string;
  subject: string;
  schedule: object;
}

const label_week_day = [
  'Domingo',
  'Segunda-Feira',
  'Terça-Feira',
  'Quarta-Feira',
  'Quinta-Feira',
  'Sexta-Feira',
  'Sábado',
];

const Profile: React.FC = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [userData, setUserData] = useState({} as UserData);
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    async function getUserData() {
      const response = await api.get('/users');

      setUserData(response.data);

      formRef.current?.setData({
        cost: response.data?.cost,
        subject: response.data?.subject,
      });
    }

    getUserData();
  }, []);

  useEffect(() => {
    formRef.current?.setData({
      name: user?.name.split(' ')[0],
      lastname: user?.name.split(' ')[1],
      email: user?.email,
      whatsapp: user?.whatsapp,
      bio: user?.bio,
    });
  }, [user]);

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    const { bio, email, name, lastname, whatsapp } = data;

    await api.put('/users', {
      name: `${name} ${lastname}`,
      email,
      whatsapp,
      bio,
    });

    const { subject, schedule } = data;

    await api.put('/classes', {
      subject,
      schedule,
    });

    history.push('/');
  };

  return (
    <ProfilePage>
      <PageHeader>
        <BG />
      </PageHeader>

      <ProfileContent>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <AvatarFieldset>
            <img
              src={
                userData?.avatar ||
                `https://avatars.dicebear.com/api/initials/${userData?.name}.svg`
              }
              alt="avatar"
            />
            <h1>{userData?.name}</h1>
            <span>{userData.subject}</span>
          </AvatarFieldset>

          <FormFields>
            <fieldset>
              <legend>Seus dados</legend>
              <div className="fields">
                <Input name="name" label="Nome" />
                <Input name="lastname" label="Sobrenome" />
              </div>

              <div className="contactfields">
                <Input
                  className="email"
                  type="email"
                  name="email"
                  label="E-mail"
                />
                <Input name="whatsapp" label="Whatsapp" />
              </div>

              <Textarea name="bio" label="Biografia" />
            </fieldset>

            <fieldset>
              <legend>Sobre a aula</legend>

              <div className="subjectfields">
                <Select
                  name="subject"
                  value={userData.subject}
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

                <Input name="cost" label="Custo da sua hora/aula" />
              </div>
            </fieldset>

            <fieldset>
              <legend>
                Horários disponíveis
                <button type="button">+ Novo horário</button>
              </legend>
              {userData?.schedule?.map((schedule, index) => (
                <div key={schedule.id} className="schedule-item">
                  <Select
                    name={`schedule[${index}].week_day`}
                    label="Dia da semana"
                    value={String(schedule.week_day)}
                    options={[
                      { value: 0, label: label_week_day[0] },
                      { value: 1, label: label_week_day[1] },
                      { value: 2, label: label_week_day[2] },
                      { value: 3, label: label_week_day[3] },
                      { value: 4, label: label_week_day[4] },
                      { value: 5, label: label_week_day[5] },
                      { value: 6, label: label_week_day[6] },
                    ]}
                  />
                  <Input
                    name={`schedule[${index}].from`}
                    value={schedule.from}
                    label="Das"
                    type="time"
                  />
                  <Input
                    value={schedule.to}
                    name={`schedule[${index}].to`}
                    label="Até"
                    type="time"
                  />

                  <button>Excluir horário</button>
                </div>
              ))}
            </fieldset>

            <FormFooter>
              <p>
                <img src={warningIcon} alt="Aviso importante" />
                Importante! <br />
                Preencha todos os dados corretamente
              </p>
              <button type="submit">Salvar cadastro</button>
            </FormFooter>
          </FormFields>
        </Form>
      </ProfileContent>
    </ProfilePage>
  );
};

export default Profile;
