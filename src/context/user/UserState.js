import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import { GET_USER_BY_ID, UPDATE_USER_BY_USER_ID } from '../types';
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

  const updateUserByUserId = async (user) => {
    const { id, firstName, lastName, bio } = user;

    try {
      await firebase
        .firestore()
        .collection('users')
        .doc(id)
        .update({ firstName, lastName, bio });
      dispatch({ type: UPDATE_USER_BY_USER_ID, payload: user });
    } catch (error) {
      console.error('Error updating user: ', error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        profile: state.profile,
        getUserByUserId,
        updateUserByUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
