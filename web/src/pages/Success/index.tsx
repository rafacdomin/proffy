import React from 'react';
import { Link } from 'react-router-dom';

import successIcon from '../../assets/images/icons/success.svg';

import './styles.css';

interface SuccessProps {
  title: string;
  text: string;
}

const Success: React.FC<SuccessProps> = ({ title, text }) => {
  return (
    <div id="success-page">
      <div className="success-content">
        <img src={successIcon} alt="Sucesso" />
        <h1>{title}</h1>
        <p>{text}</p>

        <Link to={{ pathname: '/' }}>Fazer login</Link>
      </div>
    </div>
  );
};

export default Success;
