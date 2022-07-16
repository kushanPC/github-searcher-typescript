
import { IRepo, RepoActionTypes, RepoAction } from '../../types/repo';
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
      dispatch({ type: RepoActionTypes.ERROR_LOADING_REPO, payload: e.message });
      console.log(
        `произошла ошибка при загрузке репозиториев пользователя: ${e.message}`
      );
    }
  };
};

export const clearRepos = (dispatch: Dispatch<RepoAction>) =>
  dispatch({ type: RepoActionTypes.CLEAR_REPOS });
