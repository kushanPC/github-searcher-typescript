import { IRepo } from './repos';

export enum UserActionTypes {
  SEARCH_USERS = 'SEARCH_USERS',
  GET_USER = 'GET_USER',
  CLEAR_USERS = 'CLEAR_USERS',
  CLEAR_USER = 'CLEAR_USER',
  SET_LOADING_USER = 'SET_LOADING_USER',
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
  users: IUserItem[];
  user: IUserItem;
  repos: IRepo[] | null;
  loading: boolean;
}


interface SearchUserAction {
  type: UserActionTypes.SEARCH_USERS;
  payload: IUserItem[];
}

interface GetUserAction {
    type: UserActionTypes.GET_USER;
    payload: IUserItem;
}
interface ClearUserAction {
    type: UserActionTypes.CLEAR_USER;
}

interface ClearUsersAction {
  type: UserActionTypes.CLEAR_USERS;
}

interface SetLoadingUserAction {
  type: UserActionTypes.SET_LOADING_USER;
}

export type UserAction =
  | SearchUserAction
  | GetUserAction
  | ClearUsersAction
  | ClearUserAction
  | SetLoadingUserAction;


