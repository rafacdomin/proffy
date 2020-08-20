import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

export interface FormData {
  email: string;
  password: string;
  checkbox: Array<[]>;
}

interface ScheduleObj {
  id: number;
  week_day: number;
  from: string;
  to: string;
  class_id: number;
  owner_id: number;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  bio: string;
  whatsapp: string;
  avatar: string;
  subject: string;
  cost: number;
  schedule?: Array<ScheduleObj>;
}

interface AuthContextData {
  signed: boolean;
  user: UserData | null;
  signIn(data: FormData): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await localStorage.getItem('@Proffy:user');
      const storagedToken = await localStorage.getItem('@Proffy:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      } else {
        const sessionUser = await sessionStorage.getItem('@Proffy:user');
        const sessionToken = await sessionStorage.getItem('@Proffy:token');

        if (sessionUser && sessionUser) {
          setUser(JSON.parse(sessionUser));
          api.defaults.headers.Authorization = `Bearer ${sessionToken}`;
        }
      }
    }

    loadStoragedData();
  }, []);

  async function signIn({ email, password, checkbox }: FormData) {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    setUser(response.data.user);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    await sessionStorage.setItem(
      '@Proffy:user',
      JSON.stringify(response.data.user)
    );
    await sessionStorage.setItem('@Proffy:token', response.data.token);

    if (checkbox.length !== 0) {
      await localStorage.setItem(
        '@Proffy:user',
        JSON.stringify(response.data.user)
      );
      await localStorage.setItem('@Proffy:token', response.data.token);
    }
  }

  async function signOut() {
    await localStorage.clear();
    await sessionStorage.clear();
    setUser(null);
    api.defaults.headers.Authorization = '';
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
