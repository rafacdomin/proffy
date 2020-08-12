import React, { useRef } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../components/InputFloatLabel';

import logoImg from '../../assets/images/logo.svg';
import background from '../../assets/images/bg.svg';
import backLightIcon from '../../assets/images/icons/back-light.svg';
//import backDarkIcon from '../../assets/images/icons/back-dark.svg';

import './styles.css';
import { Link } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
}

export default function ResetPassword() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div id="resetpassword-page">
      <header className="backButton">
        <Link to="/">
          <img src={backLightIcon} alt="Voltar" />
        </Link>
      </header>
      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className="logo-content"
      >
        <div className="logo">
          <img src={logoImg} alt="Proffy" />
          <span>Sua plataforma de estudos online</span>
        </div>
      </div>
      <div className="resetpassword-page-content">
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>
            Eita, esqueceu sua senha?
            <span>Não esquenta, vamos dar um jeito nisso.</span>
          </h1>

          <div className="inputs">
            <Input label="E-mail" name="email" type="email" />
          </div>

          <button className="submit-button" type="submit">
            Enviar
          </button>
        </Form>
      </div>
    </div>
  );
}
