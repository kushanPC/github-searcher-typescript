import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SearchInput from '../searchInput/SearchInput';
import RepoList from './RepoList';
import s from './userProfile.module.scss';
import { Badge } from 'react-bootstrap';
import { useAction } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

type UserProfileParams = {
  login: string;
};

const UserProfile: FC = () => {
  const params = useParams<UserProfileParams>();
  const [searchValue, setSearchValue] = useState<string>('');
  const navigate = useNavigate();
  const { login } = params;

  const { user } = useTypeSelector((state) => state.user);
  const { getUser, getUserRepos, clearUser } = useAction();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.login !== login) {
      clearUser(dispatch);
      getUser(login!);
      getUserRepos(login!);
    }
    // eslint-disable-next-line
  }, []);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { target: { value }, } = e;

    setSearchValue(value);
  }, []);

  const toSearchUserPage = () => {
    navigate('/');
  };

  return (
    <div className={s.userProfile}>
      <div onClick={toSearchUserPage} className={cn(s.buttonBack, 'btn')}>
        Back To Search
      </div>
      <div className={s.profile}>
        <img src={user.avatar_url} alt="" />
        <div className={s.profileInfo}>
          <div>{user.login || 'Login'}</div>
          <div>{user.email || 'Email'}</div>
          <div>Location: {user.location || 'Location'}</div>
          <div>Join Date: {user.created_at || 'Created'}</div>
          <Badge bg="danger" style={{ color: '#fff', width: '150px' }}>
            Followers: {user.followers}
          </Badge>
          <Badge bg="success" style={{ color: '#fff', width: '150px' }}>
            Following: {user.following}
          </Badge>
        </div>
      </div>
      <div className={s.profileBiography}></div>
      <SearchInput handleChange={handleSearch} />
      <RepoList searchValue={searchValue} />
    </div>
  );
};

export default UserProfile;
