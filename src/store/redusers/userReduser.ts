import { UserState, UserAction, UserActionTypes } from './../../types/user';

const user = {
  avatar_url: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
  id: 0,
  url: '',
  login: '',
  score: 0,
  email: '',
  location: '',
  created_at: '',
  followers: 0,
  following: 0,
};

const initialState: UserState = {
  users: [],
  user: user,
  repos: null,
  loading: false,
};

export const userReduser = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case UserActionTypes.GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case UserActionTypes.CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case UserActionTypes.CLEAR_USER:
      return {
        ...state,
        user: user
      };
    case UserActionTypes.SET_LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
