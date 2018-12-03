import { ADD_NUMBER } from 'State/actions/countActions';

// eslint-disable-next-line import/prefer-default-export
export const count = (state = 0, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return state + action.payload;
    default:
      return state;
  }
};
