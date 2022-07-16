import * as UserActionCreators from './user';
import * as RepoActionCreators from './repo';
import * as SearchUsersActionCreators from './search-users';

const ActionCreators = {...UserActionCreators, ...RepoActionCreators, ...SearchUsersActionCreators}
export default ActionCreators;