import { FC } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { IRepo } from '../../types/repos';
import s from './userProfile.module.scss';

type PropsRepoList = {
  searchValue: string;
};

type PropsRepository = {
  stargazers_count: number;
  forks_count: number;
  name: string;
  html_url: string;
};

const Repository: FC<PropsRepository> = ({
  forks_count,
  stargazers_count,
  name,
  html_url,
}) => {
  return (
    <a href={html_url} className={s.repository}>
      <span className={s.name}>{name}</span>
      <div className={s.info}>
        <span>Repository Forks: {forks_count}</span>
        <span>Repository Star: {stargazers_count}</span>
      </div>
    </a>
  );
};

const RepoList: FC<PropsRepoList> = ({ searchValue }) => {
  const { repos, loading } = useTypeSelector((state) => state.repo);

  if (loading) {
    return <span>идет загрузка...</span>;
  }

  return (
    <div className={s.repoList}>
      {repos && repos?.length ? (
        repos
          .filter((repo: IRepo) => repo.name.search(searchValue) !== -1)
          .map((repo: IRepo) => {
            return <Repository {...repo} key={repo.name} />;
          })
      ) : (
        <div className={s.emptyList}>У юзера нет публичных репозиториев</div>
      )}
    </div>
  );
};

export default RepoList;
