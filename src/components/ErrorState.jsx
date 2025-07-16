import { FiAlertTriangle, FiRotateCcw } from "react-icons/fi";
import { useGitHub } from "../context/githubContext";

export default function ErrorState({ error }) {
  const { setLoading, setError, searchGitHubUser, inputValue } = useGitHub();

  const handleRetry = async() => {
    setLoading(true);
    setError(null);
    await searchGitHubUser(inputValue.trim());
  };

  return (
    <section className="mb-8 max-w-2xl mx-auto p-4">
      <div className="border border-red-500 rounded-md bg-red-50 p-6 shadow">
        <div className="text-center">
          <FiAlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-red-800 mb-2">{error}</h3>
          <button
            onClick={handleRetry}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            <FiRotateCcw className="h-4 w-4" />
            Try Again
          </button>
        </div>
      </div>
    </section>
  );
}
