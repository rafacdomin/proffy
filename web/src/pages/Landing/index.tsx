import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { useAuth } from '../../contexts/auth';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/ilustra.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import HeartIcon from '../../assets/images/icons/heart.svg';
import logoutIcon from '../../assets/images/icons/logout.svg';

import { LandingPage, LandingContent, Footer, Content } from './styles';

function Landing() {
  const { signOut, user } = useAuth();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    async function getConnections() {
      const { data } = await api.get('/connections');

      setTotalConnections(data.total);
    }

    getConnections();
  }, []);

  async function handleLogOut() {
    signOut();
  }

  return (
    <LandingPage>
      <header>
        <Link to="/profile" id="user">
          <img
            src={
              user?.avatar ||
              `https://avatars.dicebear.com/api/initials/${user?.name}.svg`
            }
            alt="Avatar de usuário"
          />
          {user?.name}
        </Link>
        <button type="button" onClick={handleLogOut}>
          <img src={logoutIcon} alt="Sair" />
        </button>
      </header>

      <LandingContent>
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landingImg} alt="Plataforma de estudos" />
      </LandingContent>

      <Footer>
        <Content>
          <div className="welcome">
            <span>Seja bem-vindo.</span>
            <h1>O que deseja fazer?</h1>
          </div>

          <div className="buttons-container">
            <Link to="/study" className="study">
              <img src={studyIcon} alt="Estudar" />
              Estudar
            </Link>

            <Link to="/give-classes" className="give-classes">
              <img src={giveClassesIcon} alt="Dar aulas" />
              Dar aulas
            </Link>
          </div>

          <div className="total-connections">
            <span>
              Total de {totalConnections} conexões já realizadas
              <img src={HeartIcon} alt="Coração Roxo" />
            </span>
          </div>
        </Content>
      </Footer>
    </LandingPage>
  );
}

export default Landing;
