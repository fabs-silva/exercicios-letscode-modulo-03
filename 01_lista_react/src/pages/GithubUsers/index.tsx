import { useEffect, useState } from "react";

type GithubUser = {
  login: string;
  url: string;
  name: string;
  email: string;
};

type GithubRepo = {
  id: number;
  name: string;
};

interface UserProps {
  user: GithubUser;
}

interface UserRepoProps {
  repos: GithubRepo[];
}

function GithubUsers() {
  const githubUser: string = "petyaranha";
  const [user, setUser] = useState<GithubUser>({} as GithubUser);
  const [userRepos, setUserRepos] = useState<GithubRepo[]>([] as GithubRepo[]);
  const [loadingUser, setLoadingUser] = useState(false);
  const [loadingRepos, setLoadingRepos] = useState(false);

  useEffect(() => {
    async function getGithubUser() {
      setLoadingUser(true);
      const response = await fetch(
        `https://api.github.com/users/${githubUser}`
      );
      const githubUserData = await response.json();

      setUser({
        login: githubUserData.login,
        url: githubUserData.url,
        name: githubUserData.name,
        email: githubUserData.email,
      });
      setLoadingUser(false);
    }

    getGithubUser();
    console.log(user);
  }, []);

  useEffect(() => {
    async function getGithubUserRepos() {
      setLoadingRepos(true);
      const response = await fetch(
        `https://api.github.com/users/${githubUser}/repos`
      );
      const githubReposData = await response.json();

      setUserRepos(
        githubReposData.map((repo: any) => {
          return {
            id: repo.id,
            name: repo.name,
          };
        })
      );
      setLoadingRepos(false);
    }

    getGithubUserRepos();
    console.log(userRepos);
  }, []);

  return (
    <div>
      <h1>Github Data</h1>
      {loadingUser ? <Loading /> : <User user={user} />}
      <h2>Github User Repos</h2>
      {loadingRepos ? <Loading /> : <UserRepo repos={userRepos} />}
    </div>
  );
}

function User({ user, ...rest }: UserProps) {
  return (
    <div>
      <h2>Github User</h2>
      <p>
        <strong>Username: </strong>
        {user.name}
      </p>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>
      <p>
        <strong>Login: </strong>
        {user.login}
      </p>
      <p>
        <strong>Url: </strong>
        {user.url}
      </p>
    </div>
  );
}

function UserRepo({ repos, ...rest }: UserRepoProps) {
  return (
    <div>
      {repos.map((repo) => {
        return (
          <div key={repo.id}>
            <p>{repo.name}</p>
          </div>
        );
      })}
    </div>
  );
}

function Loading() {
  return (
    <div>
      <p>Loading...</p>
    </div>
  );
}

export default GithubUsers;
