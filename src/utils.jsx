
export const GitHubAPIError = (status = 500, message = "GitHub API Error") => {
  const error = new Error(message);
  error.name = "GitHubAPIError";
  error.status = status;
  return error;
};




