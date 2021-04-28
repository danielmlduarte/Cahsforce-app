import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Components/Input';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  return (
    <div>
      <Input
        name="E-mail"
        stateValue={ loginEmail }
        id="login-email"
        setStateValue={ setLoginEmail }
      />
      <Input
        type="password"
        name="Senha"
        stateValue={ loginPassword }
        id="login-password"
        setStateValue={ setLoginPassword }
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
