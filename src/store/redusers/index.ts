import { userReduser } from './userReduser';
import { repoReduser } from './repoReduser';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    user: userReduser,
    repo: repoReduser
});

export type RootState = ReturnType<typeof rootReducer>