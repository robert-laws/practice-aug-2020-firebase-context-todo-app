import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import { GET_USER_BY_ID } from '../types';
import firebase from 'firebase/app';

const UserState = ({ children }) => {
  const initialState = {
    profile: {},
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const getUserByUserId = async (id) => {
    try {
      const userInfoDoc = await firebase
        .firestore()
        .collection('users')
        .doc(id)
        .get();

      const profile = userInfoDoc.data();

      dispatch({ type: GET_USER_BY_ID, payload: profile });
    } catch (error) {
      console.error('Error getting user profile: ', error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        profile: state.profile,
        getUserByUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
