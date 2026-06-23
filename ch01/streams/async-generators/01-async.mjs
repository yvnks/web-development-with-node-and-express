import { Readable } from 'node:stream';

// Generator function

async function* ghRepos() {
  const response = await fetch('https://github.com/users');
  const users = await response.json();

  for (let i = 0; i < 10; i++) {
    const reposResponse = await fetch(users[0].repos_url);
    yield await reposResponse.json();
  }
}

async function* ghFirsts() {
  for await (const repos of ghRepos()) {
    if (repos[0]) {
      yield repos[0].full_name + '\n';
    }
  }
}

Readable.from(ghFirsts()).pipe(process.stdout);
