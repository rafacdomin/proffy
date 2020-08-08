import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import Checkbox from './components/Checkbox';

import logoImg from '../../assets/images/logo.svg';
import background from '../../assets/images/bg.svg';
import heartIcon from '../../assets/images/icons/heart.svg';

import './styles.css';

export default function Login() {
  function handleSubmit(data: string) {
    console.log(data);
  }

  return (
    <div id="login-page">
      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className="logo-content"
      >
        <img src={logoImg} alt="Proffy" />
        <span>Sua plataforma de estudos online</span>
      </div>
      <div className="login-page-content">
        <Form onSubmit={handleSubmit}>
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
            <Link to="/">Esqueci minha senha</Link>
          </div>
          <button className="submit-button" type="submit">
            Entrar
          </button>
        </Form>
        <footer>
          <span>
            Não tem conta? <Link to="/">Cadastre-se</Link>
          </span>

          <span>
            É de graça <img src={heartIcon} alt="Coração" />
          </span>
        </footer>
      </div>
    </div>
  );
}
