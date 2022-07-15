
import { UserActionTypes, UserAction, IUserItem } from './../../types/user';
import { Dispatch } from 'redux';
import axiosInstance from '../../api';

export const searchUsers = (text: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.SET_LOADING_USER });
      const res = await axiosInstance.get(`/search/users?q=${text}`);
      dispatch({
        type: UserActionTypes.SEARCH_USERS,
        payload: res.data.items,
      });
    } catch (e: any) {
      console.log(`произошла ошибка при загрузке пользователей: ${e.message}`);
    }
  };
};

export const getUser = (username: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.SET_LOADING_USER });
      const res = await axiosInstance.get<IUserItem>(`/users/${username}`);
      dispatch({
        type: UserActionTypes.GET_USER,
        payload: res.data,
      });
    } catch (e: any) {
      console.log(`произошла ошибка при загрузке пользователя: ${e.message}`);
    }
  };
};

export const clearUser = (dispatch: Dispatch<UserAction>) =>
  dispatch({ type: UserActionTypes.CLEAR_USER });

