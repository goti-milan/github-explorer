import React, { createContext, useReducer, useContext } from "react";

const GitHubContext = createContext();

const initialState = {
  users: [],
  user: null,
  repos: [],
  loading: false,
  error: null,
  searchQuery: "",
  hasSearched: false,
};

const githubReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "GET_USER":
      return { ...state, user: action.payload, loading: false };
    case "GET_REPOS":
      return { ...state, repos: action.payload, loading: false };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_HAS_SEARCHED":
      return { ...state, hasSearched: action.payload };
    default:
      return state;
  }
};

export const GitHubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GitHubContext.Provider value={{ state, dispatch }}>
      {children}
    </GitHubContext.Provider>
  );
};

export const useGitHub = () => {
  const context = useContext(GitHubContext);
  if (!context) {
    throw new Error("useGitHub must be used within a GitHubProvider");
  }
  return context;
};
