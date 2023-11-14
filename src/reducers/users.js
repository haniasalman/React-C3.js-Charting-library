import { LOAD_DATA, GET_DATA, FAILED_DATA } from '../actions/types';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, loading: true };
    case GET_DATA:
      return { ...state, loading: false, users: action.users };
    case FAILED_DATA:
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};

export default users;
