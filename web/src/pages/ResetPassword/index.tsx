import React, { useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../components/InputFloatLabel';

import logoImg from '../../assets/images/logo.svg';
import backLightIcon from '../../assets/images/icons/back-light.svg';
//import backDarkIcon from '../../assets/images/icons/back-dark.svg';

import { ResetPassPage, LogoContent, ResetPassContent } from './styles';

interface FormData {
  name: string;
  email: string;
}

export default function ResetPassword() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);

    history.push('/reset-password-success');
  };

  return (
    <ResetPassPage>
      <header>
        <Link to="/">
          <img src={backLightIcon} alt="Voltar" />
        </Link>
      </header>

      <LogoContent>
        <div className="logo">
          <img src={logoImg} alt="Proffy" />
          <span>Sua plataforma de estudos online</span>
        </div>
      </LogoContent>

      <ResetPassContent>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>
            Eita, esqueceu sua senha?
            <span>Não esquenta, vamos dar um jeito nisso.</span>
          </h1>

          <div className="inputs">
            <Input label="E-mail" name="email" type="email" />
          </div>

          <button
            className="submit-button"
            type="submit"
            onClick={() => handleSubmit}
          >
            Enviar
          </button>
        </Form>
      </ResetPassContent>
    </ResetPassPage>
  );
}
