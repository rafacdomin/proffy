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

export default function SignUp() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div id="signup-page">
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
      <div className="signup-page-content">
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>
            Cadastro
            <span>Preencha os dados abaixo para começar.</span>
          </h1>

          <div className="inputs">
            <Input label="Nome" name="name" type="text" />
            <Input label="Sobrenome" name="lastname" type="text" />
            <Input label="E-mail" name="email" type="email" />
            <Input label="Senha" name="password" type="password" />
          </div>

          <button className="submit-button" type="submit">
            Concluir cadastro
          </button>
        </Form>
      </div>
    </div>
  );
}
