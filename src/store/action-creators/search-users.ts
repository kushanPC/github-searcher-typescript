import {
  SearchUserActionTypes,
  SearchUsersAction,
} from './../../types/search-users';
import { Dispatch } from 'redux';
import axiosInstance from '../../api';

export const getUsers = (text: string) => {
  return async (dispatch: Dispatch<SearchUsersAction>) => {
    try {
      dispatch({ type: SearchUserActionTypes.SET_LOADING_USERS });
      const res = await axiosInstance.get(`/search/users?q=${text}`);
      dispatch({
        type: SearchUserActionTypes.SEARCH_USERS,
        payload: res.data.items,
      });
    } catch (e: any) {
      dispatch({ type: SearchUserActionTypes.ERROR_LOADING_USERS, payload: e.message });
      console.log(`произошла ошибка при загрузке пользователей: ${e.message}`);
    }
  };
};
