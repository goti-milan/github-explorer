import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");


  const handleError = (status , type)=>{
    switch (status) {
      case 404:
          throw new Error(type + ' not found');
      case 403:
        throw new Error('API rate limit exceeded');        
      default:
        throw new Error('Something went wrong');
    }
  }

  const searchGitHubUser = async (username) => {
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        ),
      ]);
        
      if (!userRes.ok) handleError(userRes.status , 'user');
      if (!reposRes.ok) handleError(reposRes.status, 'repositories');

      const userDataJson = await userRes.json();
      const reposJson = await reposRes.json();

      toast.success(`Fetched data for ${username}`);
      setUserData(userDataJson);
      setRepos(reposJson);

    } catch (err) {
      setError(err.message);
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <GitHubContext.Provider
      value={{
        userData,
        setUserData,
        loading,
        setLoading,
        repos,
        setRepos,
        error,
        setError,
        searchGitHubUser,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGitHub = () => useContext(GitHubContext);
