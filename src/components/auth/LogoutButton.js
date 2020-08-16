import React from 'react';
import firebase from 'firebase/app';

const LogoutButton = () => {
  const logoutUser = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error('error signing out...', error);
    }
  };

  return <button onClick={logoutUser}>Logout</button>;
};

export default LogoutButton;
