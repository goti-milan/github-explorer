import { BiSearch } from "react-icons/bi";
import { useGitHub } from "../context/githubContext";
import { useEffect } from "react";

const SearchSection = () => {
  const {
    loading,
    searchGitHubUser,
    inputValue,
    setInputValue,
    setError,
    setRepos,
    setUserData,
  } = useGitHub();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await searchGitHubUser(inputValue.trim());
  };

  useEffect(() => {
    if (!inputValue) {
      setUserData(null);
      setRepos([]);
      setError(null);
    }
  }, [inputValue ]);

  return (
    <section className="mb-8 lg:max-w-5xl sm:max-w-2xl mx-auto p-2 bg-white rounded shadow">
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
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !inputValue.trim()}
          className="min-w-[120px] px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {loading ? (
            <>Searching...</>
          ) : (
            <>
              <BiSearch />
              Search
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default SearchSection;
