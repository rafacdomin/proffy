import React, { useRef, useEffect } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';

import { useAuth } from '../../contexts/auth';

import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

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

const Profile: React.FC = () => {
  const { user } = useAuth();
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    formRef.current?.setData({
      name: user?.name.split(' ')[0],
      lastname: user?.name.split(' ')[1],
      email: user?.email,
      whatsapp: user?.whatsapp,
      bio: user?.bio,
      cost: user?.cost,
      subject: user?.subject,
    });
  }, [user]);

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get(`/classes/${user?.id}`);

      console.log(response.data);
    }

    loadSchedule();
  }, [user]);

  return (
    <ProfilePage>
      <PageHeader>
        <BG />
      </PageHeader>

      <ProfileContent>
        <Form ref={formRef} onSubmit={() => {}}>
          <AvatarFieldset>
            <img
              src={
                user?.avatar ||
                `https://avatars.dicebear.com/api/initials/${user?.name}.svg`
              }
              alt="avatar"
            />
            <h1>{user?.name}</h1>
            <span>{user?.subject}</span>
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
                  label="Matéria"
                  initialData={user?.subject}
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
              <div className="schedule-item">
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
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />

                <button>Excluir horário</button>
              </div>
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
