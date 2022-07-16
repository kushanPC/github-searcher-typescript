import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { IUserItem } from '../../types/user';
import s from './searchUsers.module.scss';

type PropsUserItem = {
  avatar_url: string,
  id: number,
  url: string,
  login: string,
  score: number
}

type UsersListProps = {
  users: IUserItem[]
}

const UserItem: FC<PropsUserItem> = ({ avatar_url, id, login }) => {
  return (<Link to={`/user/${login}`} className={s.userItem} key={id}>
      <div className={s.userInfo}>
        <img src={avatar_url} alt="" />
        <span className={s.userName}>{login}</span>
      </div>
  </Link>
  )
}

const UsersList: FC<UsersListProps> = ({ users }) => {
  const { error } = useTypeSelector((state) => state.users);

  if (error) {
    return <span>{`Произошла ошибка при загрузке пользователей: ${error}`}</span>
  }
  return (
    <div className={s.usersList}>
      {users.length ?
        (users.map((user: IUserItem) =>
          <UserItem {...user} key={user.login} />
        )) :
        <div>Users is clear</div>
      }
    </div>
  )
}

export default UsersList;