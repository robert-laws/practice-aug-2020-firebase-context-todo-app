import { useState, useEffect } from 'react';
import { addAuthListener } from './addAuthListener';
import { getCurrentUser } from './getCurrentUser';

export const useAuth = () => {
  const [authInfo, setAuthInfo] = useState(() => {
    const user = getCurrentUser();
    const isLoading = !user;
    return { user, isLoading };
  });

  useEffect(() => {
    const unsubscribe = addAuthListener((user) => {
      console.log(user);
      setAuthInfo({ isLoading: false, user });
    });

    return unsubscribe;
  }, []);

  return authInfo;
};
