import { GET_USER_BY_ID } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_USER_BY_ID:
      return {
        ...state,
        profile: { ...action.payload },
      };

    default:
      return state;
  }
};
