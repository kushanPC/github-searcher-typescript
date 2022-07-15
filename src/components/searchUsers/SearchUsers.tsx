import { ChangeEvent, FC, useCallback } from 'react';
import SearchInput from '../searchInput/SearchInput';
import UsersList from './UsersList';
import s from './searchUsers.module.scss';
import { debounce } from 'lodash';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useAction } from '../../hooks/useAction';

const SearchUsers: FC = () => {
  const { users } = useTypeSelector((state) => state.user);
  const { searchUsers } = useAction();
  const { loading } = useTypeSelector((state) => state.user);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { target: { value } } = e;
    if (value) {
      searchUsers(value);
    }
  }, []);

  return (
    <div className={s.searchUsers}>
      <SearchInput handleChange={debounce(handleSearch, 700)} />
      {loading ? <div>Loading users...</div> : <UsersList users={users} />}
    </div>
  );
};

export default SearchUsers;
