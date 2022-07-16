import { ChangeEvent, FC, useCallback, useEffect } from 'react';
import SearchInput from '../searchInput/SearchInput';
import UsersList from './UsersList';
import s from './searchUsers.module.scss';
import { debounce } from 'lodash';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useAction } from '../../hooks/useAction';

const SearchUsers: FC = () => {
  const { users } = useTypeSelector((state) => state.users);
  const { getUsers } = useAction();
  const { loading } = useTypeSelector((state) => state.users);

  const handleSearch = debounce(useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { target: { value } } = e;
    if (value.length > 2) {
      getUsers(value);
    }
  }, []), 700);

  useEffect(() => {
    return () => {
      handleSearch.cancel();
    }
  }, []);
  
  return (
    <div className={s.searchUsers}>
      <SearchInput handleChange={handleSearch} />
      {loading ? <div>Loading users...</div> : <UsersList users={users} />}
    </div>
  );
};

export default SearchUsers;
