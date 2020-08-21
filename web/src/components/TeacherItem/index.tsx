import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Item, Header, DayList, DayElement } from './styles';

import api from '../../services/api';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
  schedule: Array<{
    id: number;
    week_day: number;
    from: string;
    to: string;
  }>;
}

interface DayProps {
  name: string;
  value: number;
  schedule: Array<{
    id: number;
    week_day: number;
    from: string;
    to: string;
  }>;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    });
  }

  const RenderDay = ({ name, value, schedule }: DayProps) => {
    const DayExist = schedule.find((sch) => sch.week_day === value);

    let hour = '-';
    let disabled = true;

    if (!!DayExist) {
      hour = `${DayExist.from} - ${DayExist.to}`;
      disabled = false;
    }

    return (
      <DayElement disabled={disabled}>
        <span>Dia</span>
        <h1>{name}</h1>

        <span>Horário</span>
        <h1>{hour}</h1>
      </DayElement>
    );
  };

  return (
    <Item>
      <Header>
        <img
          src={
            teacher.avatar ||
            `https://avatars.dicebear.com/api/initials/${teacher?.name}.svg`
          }
          alt="Avatar"
        />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </Header>

      <p>{teacher.bio}</p>

      <DayList>
        <RenderDay name="Sábado" value={0} schedule={teacher.schedule} />
        <RenderDay name="Segunda" value={1} schedule={teacher.schedule} />
        <RenderDay name="Terça" value={2} schedule={teacher.schedule} />
        <RenderDay name="Quarta" value={3} schedule={teacher.schedule} />
        <RenderDay name="Quinta" value={4} schedule={teacher.schedule} />
        <RenderDay name="Sexta" value={5} schedule={teacher.schedule} />
        <RenderDay name="Sábado" value={6} schedule={teacher.schedule} />
      </DayList>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost},00</strong>
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </Item>
  );
};

export default TeacherItem;
