import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../components/InputFloatLabel';
import Checkbox from './components/Checkbox';

import logoImg from '../../assets/images/logo.svg';
import background from '../../assets/images/bg.svg';
import heartIcon from '../../assets/images/icons/heart.svg';

import './styles.css';

interface FormData {
  name: string;
  email: string;
}

export default function Login() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div id="login-page">
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
      <div className="login-page-content">
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Fazer login</h1>

          <div className="inputs">
            <Input label="E-mail" name="email" type="email" />
            <Input label="Senha" name="password" type="password" />
          </div>

          <div className="login-options">
            <Checkbox
              name="checkbox"
              options={[{ id: 'yes', value: 'yes', label: 'Lembrar-me' }]}
            />
            <Link to="/reset-password">Esqueci minha senha</Link>
          </div>
          <button className="submit-button" type="submit">
            Entrar
          </button>
        </Form>
        <footer>
          <span>
            Não tem conta? <Link to="/register">Cadastre-se</Link>
          </span>

          <span>
            É de graça <img src={heartIcon} alt="Coração" />
          </span>
        </footer>
      </div>
    </div>
  );
}