import { RepoState, RepoActionTypes, RepoAction } from './../../types/repos';

const initialState: RepoState = {
  repos: null,
  loading: false
};

export const repoReduser = (
  state = initialState,
  action: RepoAction
): RepoState => {
  switch (action.type) {
    case RepoActionTypes.SET_REPOS: {
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    }
    case RepoActionTypes.CLEAR_REPOS: {
      return {
        ...state,
        repos: null
      };
    }
    case RepoActionTypes.SET_LOADING_REPO:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
