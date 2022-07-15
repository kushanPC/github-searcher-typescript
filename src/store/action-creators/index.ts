import * as UserActionCreators from './user';
import * as RepoActionCreators from './repo';

const ActionCreators = {...UserActionCreators, ...RepoActionCreators}
export default ActionCreators;