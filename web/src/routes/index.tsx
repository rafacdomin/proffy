import React from 'react';

import { useAuth } from '../contexts/auth';

import SignRoutes from './sign.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const { signed } = useAuth();

  return signed ? <AuthRoutes /> : <SignRoutes />;
};

export default Routes;
