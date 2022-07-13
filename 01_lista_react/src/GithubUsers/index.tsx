import { useEffect, useState } from 'react';

type GithubUser = {
  login: string;
  avatar: string;
  url: string;
  name: string;
  email: string;
};

function GithubUsers() {
  const [user, setUser] = useState<GithubUser>({} as GithubUser);

  useEffect(() => {
    async function getGithubUser() {
      const response = await fetch('https://api.github.com/users/fabs-silva');
      const githubUserData = await response.json();

      setUser({
        login: githubUserData.login,
        avatar: githubUserData.avatar_url,
        url: githubUserData.url,
        name: githubUserData.name,
        email: githubUserData.email,
      });
    }

    getGithubUser();
  }, []);

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.login}</p>
      <p>{user.url}</p>
      <p>{user.avatar}</p>
    </div>
  );
}

export default GithubUsers;
