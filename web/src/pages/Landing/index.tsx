import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/ilustra.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import HeartIcon from '../../assets/images/icons/heart.svg';
import logoutIcon from '../../assets/images/icons/logout.svg';

import './styles.css';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    async function getConnections() {
      const { data } = await api.get('/connections');

      setTotalConnections(data.total);
    }

    getConnections();
  }, []);

  return (
    <div id="page-landing">
      <header id="header">
        <Link to="/" id="user">
          <img
            src="https://api.adorable.io/avatars/220/abott@adorable.png"
            alt="Avatar de usuário"
          />
          Professor Adorable
        </Link>
        <button className="logout-button">
          <img src={logoutIcon} alt="Sair" />
        </button>
      </header>

      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
      </div>

      <footer>
        <div id="footer">
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
        </div>
      </footer>
    </div>
  );
}

export default Landing;
