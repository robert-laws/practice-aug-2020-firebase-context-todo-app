import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';

const CreateAccountForm = () => {
  const history = useHistory();

  const [newUserInfo, setNewUserInfo] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    bio: '',
  });

  const handleChange = (event) => {
    setNewUserInfo({
      ...newUserInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch('/createAccount', {
      method: 'POST',
      body: JSON.stringify({ newUserInfo }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Account created! Please check your inbox.');

    await firebase.auth().signOut();
    history.push('/login');
  };

  return (
    <div>
      <h3>Create New Account</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='firstName'>First Name: </label>
          <input
            type='text'
            name='firstName'
            value={newUserInfo.firstName}
            onChange={handleChange}
            placeholder='first name'
          />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name: </label>
          <input
            type='text'
            name='lastName'
            value={newUserInfo.lastName}
            onChange={handleChange}
            placeholder='last name'
          />
        </div>
        <div>
          <label htmlFor='firstName'>Email Address: </label>
          <input
            type='text'
            name='emailAddress'
            value={newUserInfo.emailAddress}
            onChange={handleChange}
            placeholder='email address'
          />
        </div>
        <div>
          <label htmlFor='lastName'>Password: </label>
          <input
            type='text'
            name='password'
            value={newUserInfo.password}
            onChange={handleChange}
            placeholder='password'
          />
        </div>
        <div>
          <label htmlFor='bio'>Bio: </label>
          <textarea
            name='bio'
            rows='4'
            cols='50'
            value={newUserInfo.bio}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type='submit'>Create New User</button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccountForm;
