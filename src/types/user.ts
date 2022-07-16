export enum UserActionTypes {
  GET_USER = 'GET_USER',
  CLEAR_USER = 'CLEAR_USER',
  SET_LOADING_USER = 'SET_LOADING_USER',
  ERROR_LOADING_USER = 'ERROR_LOADING_USER',
}

export interface IUserItem {
  avatar_url: string;
  id: number;
  url: string;
  login: string;
  score: number;
  email: string;
  location: string;
  created_at: string;
  followers: number;
  following: number;
}

export interface UserState {
  user: IUserItem;
  loading: boolean;
  error: string
}

interface GetUserAction {
  type: UserActionTypes.GET_USER;
  payload: IUserItem;
}
interface ClearUserAction {
  type: UserActionTypes.CLEAR_USER;
}

interface SetLoadingUserAction {
  type: UserActionTypes.SET_LOADING_USER;
}

interface SetErrorLoadingUserAction {
  type: UserActionTypes.ERROR_LOADING_USER;
  payload: string
}

export type UserAction = GetUserAction | ClearUserAction | SetLoadingUserAction | SetErrorLoadingUserAction;
