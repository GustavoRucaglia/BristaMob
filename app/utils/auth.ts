import { useState } from "react";
import { PontoInterrese } from "./api-request";

 
interface Credentials {
  login: string;
  password: string;
}
 
interface CredentialRegister{
  login: string,
  password: string,
  role: string,
  name?: string,
  telefone?: string,
}


export interface User {
  id: string;
  login: string;
  username?: string;
  name?: string;
  password: string;
  photo: string | null;
  role?: string
  telefone?: string | null;
  comentarios?: Comment[];
  roteiro?: Roteiro[];
  state?: boolean
}
 export interface Roteiro {
  id: string;
  name: string;
  pontosTuristicos: PontoInterrese[];
 }
interface Recover{
  login: string
}


export const API = 'https://f64e-200-155-154-206.ngrok-free.app';

const defaultHeaders = {
  "ngrok-skip-browser-warning": "69420",
  "Content-Type": "application/json", 
};

const Textheaders = {
  "ngrok-skip-browser-warning": "69420",
  "Content-Type": "application/json", 
};

 
 const [token, setToken] = useState<string | null>('');

 const HeaderAuth = (token: string | null) => ({
  'ngrok-skip-browser-warning': '69420',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
  });

  const HeaderAuth1 = (token: string | null) => ({
    'ngrok-skip-browser-warning': '69420',
    'Content-Type': 'text/plain',
    Authorization: `Bearer ${token}`,
    });
export const loginRequest = async (credentials: Credentials) => {
    const response = await fetch(`${API}/auth/login`, {
      method: 'POST',
      headers: defaultHeaders,

      body: JSON.stringify(credentials)
    });
 
    if (!response.ok) {
      throw new Error('Login failed');
    }
 
    const data = await response.json();
   
    return data;
  };
 
  export const RegisterRequest = async (credentials: CredentialRegister ) => {
    const response = await fetch(`${API}/auth/register`, {
      method: 'POST',
      headers:defaultHeaders,
      body: JSON.stringify(credentials)
    });
 
    if (!response.ok) {
      throw new Error('Login failed');
    }
  };

  export const UpdateRequest = async (user: User, token: string ) => {
    const response = await fetch(`${API}/auth/user`, {
      method: 'PUT',
      headers: HeaderAuth(token),
      body: JSON.stringify(user)
    });
 
    if (!response.ok) {
      throw new Error('Login failed');
    }
  };
 
  export const logout = () => {
  
  };
 
  export const SendPassword = async (email: String) => {
    const response = await fetch(`${API}/auth/send-password`, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify({ login: email})
    });
 
    if (!response.ok) {
      throw new Error('Password recovery failed');
    }
 
    return response.json();
  };

  export const PostRoteiro = async (text: string, token: string) => {
    const response = await fetch(`${API}/brazu/pontos/roteiro-new`, {
      method: 'POST',
      headers: HeaderAuth1(token),
      body:  text
    });
 
    if (!response.ok) {
      throw new Error('Password recovery failed');
    }
    if(token.length > 4) {
      console.log('Roteiro criado com sucesso!' + token);
    }
  
 
    return response.json();
  };


  export const fetchUserDetails = async (token: string) => {
    const response = await fetch(`${API}/auth/user`, {
      method: 'GET',
      headers: HeaderAuth(token),
    });
  
    if (!response.ok) {
      throw new Error('Erro ao buscar detalhes do usuário');
    }
  
    return response.json();
  };

  export const roteiroDetails = async (id: string, token: string) => {
    const response = await fetch(`${API}/brazu/pontos/roteiro/${id}/pontos`, {
      method: 'GET',
      headers: HeaderAuth(token),
    });
  
    if (!response.ok) {
      throw new Error('Erro ao buscar detalhes do usuário');
    }
  
    return response.json();
  };

  export const AddInRoteiro = async (id: string, addId: string, token: string) => {
    const response = await fetch(`${API}/brazu/pontos/roteiro/${id}/ponto`, {
      method: 'POST',
      headers: HeaderAuth(token),
      body: JSON.stringify(addId)
    });
  
    if (!response.ok) {
      throw new Error('Erro ao adicionar em roteiro 1');
    }
  
    return response.json();
  };
  
  export const UpdateUserDetails = async (token: string) => {
    const response = await fetch(`${API}/auth/user`, {
      method: 'PUT',
      headers: HeaderAuth(token),
    });
  
    if (!response.ok) {
      throw new Error('Erro ao buscar detalhes do usuário');
    }
  
    return response.json();
  };
  
 
