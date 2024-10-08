
 
interface Credentials {
  login: string;
  password: string;
}
 
interface CredentialRegister{
  login: string;
  password: string;
  role: string;
}
 
interface Recover{
  login: string
}
 
export const loginRequest = async (credentials: Credentials) => {
    const response = await fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
 
    if (!response.ok) {
      throw new Error('Login failed');
    }
 
    const data = await response.json();
    localStorage.setItem('token', data.token as string);
    localStorage.setItem('role', data.role as string);
    localStorage.setItem('login', data.login as string);
    return data;
  };
 
  export const RegisterRequest = async (credentials: CredentialRegister ) => {
    const response = await fetch('http://172.17.16.140:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
 
    if (!response.ok) {
      throw new Error('Login failed');
    }
  };
 
  export const logout = () => {
    localStorage.removeItem('token');
  };
 
  export const SendPassword = async (email: String) => {
    const response = await fetch('http://localhost:8080/auth/send-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login: email})
    });
 
    if (!response.ok) {
      throw new Error('Password recovery failed');
    }
 
    return response.json();
  };
 
