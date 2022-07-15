export enum RepoActionTypes {
  SET_REPOS = 'SET_REPOS',
  CLEAR_REPOS = 'CLEAR_REPOS',
  SET_LOADING_REPO = 'SET_LOADING_REPO',
}

export interface RepoState {
  repos: IRepo[] | null;
  loading: boolean
}

export interface IRepo {
  stargazers_count: number;
  forks_count: number;
  name: string;
  html_url: string;
}

interface SetLoadingRepoAction {
  type: RepoActionTypes.SET_LOADING_REPO;
}

interface SetReposAction {
  type: RepoActionTypes.SET_REPOS;
  payload: IRepo[];
}
interface ClearReposAction {
  type: RepoActionTypes.CLEAR_REPOS;
}

export type RepoAction = ClearReposAction | SetReposAction | SetLoadingRepoAction;