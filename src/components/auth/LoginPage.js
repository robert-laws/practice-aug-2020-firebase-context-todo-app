import React, { useState } from 'react';
// import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
import { signIn } from './signIn';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signIn(email, password);
      history.push('/');
    } catch (error) {
      console.error('Error signing in: ', error);
    }
  };

  return (
    <div>
      <h2>Login to the Todo App</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder='email address'
          />
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input
            type='text'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder='password'
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
