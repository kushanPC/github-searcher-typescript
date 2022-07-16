import { SearchUserActionTypes, SearchUsersState, SearchUsersAction } from '../../types/search-users';

const initialState: SearchUsersState = {
  users: [],
  loading: false,
  error: ''
};

export const searchUsersReduser = (
  state = initialState,
  action: SearchUsersAction
): SearchUsersState => {
  switch (action.type) {
    case SearchUserActionTypes.SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        error: '',
        loading: false,
      };
    case SearchUserActionTypes.CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case SearchUserActionTypes.SET_LOADING_USERS:
      return {
        ...state,
        loading: true,
      };
    case SearchUserActionTypes.ERROR_LOADING_USERS:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
