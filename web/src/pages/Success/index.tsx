import React from 'react';

import successIcon from '../../assets/images/icons/success.svg';

import './styles.css';

const Success: React.FC = () => {
  return (
    <div id="success-page">
      <div className="success-content">
        <img src={successIcon} alt="Sucesso" />
        <h1>Cadastro concluído</h1>
        <p>
          Agora você faz parte da plataforma da Proffy. Tenha uma ótima
          experiência.
        </p>

        <button type="button">Fazer login</button>
      </div>
    </div>
  );
};

export default Success;
