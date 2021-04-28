import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  return (
    <div>
      <input
        name="E-mail"
        value={ loginEmail }
        id="login-email"
        onChange={ ({ target: { value }}) => setLoginEmail(value) }
      />
      <input
        type="password"
        name="Senha"
        value={ loginPassword }
        id="login-password"
        onChange={ ({ target: { value }}) => setLoginPassword(value) }
      />
      <Link to="/main-page">
        <button type="button">
          Login
        </button>
      </Link>
    </div>
  );
};


export default Login;
