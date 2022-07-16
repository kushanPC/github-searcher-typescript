import { IUserItem } from './user';

export enum SearchUserActionTypes {
  SEARCH_USERS = 'SEARCH_USERS',
  CLEAR_USERS = 'CLEAR_USERS',
  SET_LOADING_USERS = 'SET_LOADING_USERS',
  ERROR_LOADING_USERS = 'ERROR_LOADING_USERS',
}

export interface SearchUsersState {
  users: IUserItem[];
  loading: boolean;
  error: string;
}

interface SetSearchUsersAction {
  type: SearchUserActionTypes.SEARCH_USERS;
  payload: IUserItem[];
}
interface ClearUsersAction {
  type: SearchUserActionTypes.CLEAR_USERS;
}

interface SetLoadingUserAction {
  type: SearchUserActionTypes.SET_LOADING_USERS;
}

interface SetErrorLoadingUserAction {
  type: SearchUserActionTypes.ERROR_LOADING_USERS;
  payload: string
}

export type SearchUsersAction =
  | ClearUsersAction
  | SetLoadingUserAction
  | SetSearchUsersAction
  | SetErrorLoadingUserAction;
