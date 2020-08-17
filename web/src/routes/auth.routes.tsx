import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Profile from '../pages/Profile';
import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';
import Success from '../pages/Success';

const AuthRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/profile" component={Profile} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
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
    </BrowserRouter>
  );
};

export default AuthRoutes;
