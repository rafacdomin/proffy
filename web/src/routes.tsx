import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Success from './pages/Success';

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/home" component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />

      <Route
        path="/signup-success"
        render={(props) => (
          <Success
            title="Cadastro concluído"
            text="Agora você faz parte da plataforma da Proffy. 
            Tenha uma ótima experiência."
            {...props}
          />
        )}
      />
      <Route
        path="/give-classes-success"
        render={(props) => (
          <Success
            title="Cadastro salvo!"
            text="Tudo certo, seu cadastro está na nossa lista de professores.
            Agora é só ficar de olho no seu WhatsApp."
            {...props}
          />
        )}
      />
      <Route
        path="/reset-password-success"
        render={(props) => (
          <Success
            title="Redefinição enviada!"
            text="Boa, agora é só checar o e-mail que foi enviado para você,
            redefinir sua senha e aproveitar os estudos."
            {...props}
          />
        )}
      />
    </BrowserRouter>
  );
}
