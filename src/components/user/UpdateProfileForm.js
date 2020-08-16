import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../context/user/userContext';

const UpdateProfileForm = ({ userId }) => {
  const userContext = useContext(UserContext);
  const { profile, updateUserByUserId } = userContext;

  const [userProfile, setUserProfile] = useState({
    id: '',
    firstName: '',
    lastName: '',
    bio: '',
  });

  useEffect(() => {
    setUserProfile({
      id: userId,
      ...profile,
    });
  }, [profile, userId]);

  const handleChange = (event) => {
    setUserProfile({
      ...userProfile,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    updateUserByUserId(userProfile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='firstName'>First Name: </label>
        <input
          type='text'
          name='firstName'
          value={userProfile.firstName}
          onChange={handleChange}
          placeholder='first name'
        />
      </div>
      <div>
        <label htmlFor='lastName'>Last Name: </label>
        <input
          type='text'
          name='lastName'
          value={userProfile.lastName}
          onChange={handleChange}
          placeholder='last name'
        />
      </div>
      <div>
        <label htmlFor='bio'>Bio: </label>
        <textarea
          name='bio'
          rows='4'
          cols='50'
          value={userProfile.bio}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type='submit'>Update User</button>
      </div>
    </form>
  );
};

export default UpdateProfileForm;
