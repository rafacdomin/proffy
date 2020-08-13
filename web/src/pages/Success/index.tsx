import React from 'react';
import { Link } from 'react-router-dom';

import successIcon from '../../assets/images/icons/success.svg';

import { SuccessPage, SuccessContent } from './styles';

interface SuccessProps {
  title: string;
  text: string;
}

const Success: React.FC<SuccessProps> = ({ title, text }) => {
  return (
    <SuccessPage>
      <SuccessContent>
        <img src={successIcon} alt="Sucesso" />
        <h1>{title}</h1>
        <p>{text}</p>

        <Link to={{ pathname: '/' }}>Fazer login</Link>
      </SuccessContent>
    </SuccessPage>
  );
};

export default Success;
