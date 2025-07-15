import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GitHubAPIError, fetchGitHubRepositories, fetchGitHubUser } from "../utils";
import { useGitHub } from "../context/github";

const SearchSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [validationError, setValidationError] = useState("");
  const { state, dispatch } = useGitHub();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (validationError) setValidationError("");
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      setValidationError("Please enter a search term.");
      return;
    }

    const query = inputValue.trim();
    dispatch({ type: "SET_SEARCH_QUERY", payload: query });
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "SET_ERROR", payload: null });
    dispatch({ type: "CLEAR_USERS" });
    try {
      const searchResult = await fetchGitHubUser(query);
      const repositories = await fetchGitHubRepositories(query)

      if (!searchResult) {
        dispatch({
          type: "SET_ERROR",
          payload: "No users found matching your search",
        });
      } else {
        dispatch({ type: "GET_USER", payload: {...searchResult , repos:repositories} });
        dispatch({ type: "SET_HAS_SEARCHED", payload: true });
      }
    } catch (error) {
      if (error instanceof GitHubAPIError) {
        dispatch({ type: "SET_ERROR", payload: error.message });
      } else {
        dispatch({
          type: "SET_ERROR",
          payload: "An unexpected error occurred",
        });
      }
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  return (
    <section className="mb-8 max-w-3xl mx-auto p-2 bg-white rounded shadow">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Search GitHub User
      </h2>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search GitHub user"
          value={inputValue}
          onChange={handleInputChange}
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={state.loading}
        />
        <button
          type="submit"
          disabled={state.loading || !inputValue.trim()}
          className={`min-w-[120px] px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center`}
        >
          {state.loading ? (
            <>Searching...</>
          ) : (
            <>
              <BiSearch />
              Search
            </>
          )}
        </button>
      </form>
      {validationError && (
        <div className="mt-2 text-sm text-red-600 flex items-center gap-1">
          <span>⚠️</span>
          {validationError}
        </div>
      )}
    </section>
  );
};

export default SearchSection;
