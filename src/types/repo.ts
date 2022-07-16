export enum RepoActionTypes {
  SET_REPOS = 'SET_REPOS',
  CLEAR_REPOS = 'CLEAR_REPOS',
  SET_LOADING_REPO = 'SET_LOADING_REPO',
  ERROR_LOADING_REPO = 'ERROR_LOADING_REPO',
}

export interface IRepo {
  stargazers_count: number;
  forks_count: number;
  name: string;
  html_url: string;
}

export interface RepoState {
  repos: IRepo[] | null;
  loading: boolean;
  error: string;
}

interface SetReposAction {
  type: RepoActionTypes.SET_REPOS;
  payload: IRepo[];
}

interface SetLoadingRepoAction {
  type: RepoActionTypes.SET_LOADING_REPO;
}

interface ClearReposAction {
  type: RepoActionTypes.CLEAR_REPOS;
}

interface SetErrorReposAction {
  type: RepoActionTypes.ERROR_LOADING_REPO;
  payload: string;
}

export type RepoAction =
  | SetLoadingRepoAction
  | SetReposAction
  | ClearReposAction
  | SetErrorReposAction;
