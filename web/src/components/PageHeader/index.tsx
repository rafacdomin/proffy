import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back-light.svg';

import { Header, TopBar } from './styles';

interface PageHeaderProps {
  title?: string;
  description?: string;
  Message?: React.FC;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  Message,
  children,
}) => {
  const location = useLocation();
  const [pageName, setPageName] = useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/study':
        setPageName('Estudar');
        break;

      case '/give-classes':
        setPageName('Dar Aulas');
        break;

      case '/profile':
        setPageName('Meu Perfil');
        break;

      default:
        setPageName('');
    }
  }, [location]);

  return (
    <Header>
      <TopBar>
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>

          <h1>{pageName}</h1>

          <img src={logoImg} alt="Proffy" />
        </div>
      </TopBar>

      <div className="header-content">
        <div className="content">
          <div className="title">
            {title && <strong>{title}</strong>}
            {description && <p>{description}</p>}
          </div>
          {Message && <Message />}
        </div>
        {children}
      </div>
    </Header>
  );
};

export default PageHeader;
