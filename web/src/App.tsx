import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/Global';
import { AuthProvider } from './contexts/auth';

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Routes />
    </AuthProvider>
  );
}

export default App;
