import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';
import Success from '../pages/Success';

const SignRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/reset-password" component={ResetPassword} />
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
};

export default SignRoutes;
