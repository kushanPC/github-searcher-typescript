import { UserState, UserAction, UserActionTypes } from '../../types/user';

const userInitialState = {
  avatar_url:
    'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
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
  user: userInitialState,
  loading: false,
  error: '',
};

export const userReduser = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.GET_USER:
      return {
        ...state,
        user: action.payload,
        error: '',
        loading: false,
      };
    case UserActionTypes.CLEAR_USER:
      return {
        ...state,
        user: userInitialState,
      };
    case UserActionTypes.SET_LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.ERROR_LOADING_USER:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
