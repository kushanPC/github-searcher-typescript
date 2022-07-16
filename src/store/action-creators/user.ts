
import { UserActionTypes, UserAction, IUserItem } from './../../types/user';
import { Dispatch } from 'redux';
import axiosInstance from '../../api';

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
      dispatch({ type: UserActionTypes.ERROR_LOADING_USER, payload: e.message });
      console.log(`произошла ошибка при загрузке пользователя: ${e.message}`);
    }
  };
};

export const clearUser = (dispatch: Dispatch<UserAction>) =>
  dispatch({ type: UserActionTypes.CLEAR_USER });

