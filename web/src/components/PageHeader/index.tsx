import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back-light.svg';

import { Header, TopBar } from './styles';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  children,
  description,
}) => {
  return (
    <Header>
      <TopBar>
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>

          <h1>Estudar</h1>

          <img src={logoImg} alt="Proffy" />
        </div>
      </TopBar>

      <div className="header-content">
        <div className="content">
          <strong>{title}</strong>
          {description && <p>{description}</p>}
        </div>
        {children}
      </div>
    </Header>
  );
};

export default PageHeader;
