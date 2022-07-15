
import { IRepo, RepoActionTypes, RepoAction } from '../../types/repos';
import { Dispatch } from 'redux';
import axiosInstance from '../../api';

export const getUserRepos = (username: string) => {
  return async (dispatch: Dispatch<RepoAction>) => {
    try {
      dispatch({ type: RepoActionTypes.SET_LOADING_REPO });
      const res = await axiosInstance.get<IRepo[]>(`/users/${username}/repos`);
      dispatch({
        type: RepoActionTypes.SET_REPOS,
        payload: res.data,
      });
    } catch (e: any) {
      console.log(
        `произошла ошибка при загрузке репозиториев пользователя: ${e.message}`
      );
    }
  };
};

export const clearRepos = (dispatch: Dispatch<RepoAction>) =>
  dispatch({ type: RepoActionTypes.CLEAR_REPOS });
