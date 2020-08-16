import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/user/userContext';

const UserProfile = ({ userId }) => {
  const userContext = useContext(UserContext);
  const { profile, getUserByUserId } = userContext;

  useEffect(() => {
    getUserByUserId(userId);
  }, []);

  if (Object.keys(profile).length === 0) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>User Profile</h3>
      <p>
        Name: {profile.firstName} {profile.lastName}
      </p>
      <p>Bio: {profile.bio}</p>
      <p>Age: {profile.age}</p>
      <p>Admin: {profile.admin ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default UserProfile;
