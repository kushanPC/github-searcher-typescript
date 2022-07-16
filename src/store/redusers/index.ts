import { searchUsersReduser } from './search-users';
import { repoReduser } from './repo-reduser';
import { combineReducers } from 'redux';
import { userReduser } from './user';

export const rootReducer = combineReducers({
    users: searchUsersReduser,
    user: userReduser,
    repo: repoReduser
});

export type RootState = ReturnType<typeof rootReducer>