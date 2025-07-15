const GITHUB_API_BASE = 'https://api.github.com';

export class GitHubAPIError extends Error {
  constructor(status, message) {
    super(message);
    this.name = 'GitHubAPIError';
    this.status = status;
  }
}


export const fetchGitHubUser = async (username) => {
  const response = await fetch(`${GITHUB_API_BASE}/users/${username}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new GitHubAPIError(404, 'User not found');
    } else if (response.status === 403) {
      throw new GitHubAPIError(403, 'API rate limit exceeded');
    } else {
      throw new GitHubAPIError(response.status, 'Failed to fetch user');
    }
  }

  return response.json();
};

export const fetchGitHubRepositories = async (username) => {
  const response = await fetch(
    `${GITHUB_API_BASE}/users/${username}/repos?per_page=100&sort=updated`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    }
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new GitHubAPIError(404, 'Repositories not found');
    } else if (response.status === 403) {
      throw new GitHubAPIError(403, 'API rate limit exceeded');
    } else {
      throw new GitHubAPIError(response.status, 'Failed to fetch repositories');
    }
  }

  return response.json();
};

