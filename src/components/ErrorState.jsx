import { FiAlertTriangle, FiRotateCcw } from "react-icons/fi";
import { useGitHub } from "../context/github";

export default function ErrorState({ error }) {
  const { dispatch } = useGitHub();

  const handleRetry = () => {
    dispatch({ type: "SET_ERROR", payload: null });
    dispatch({ type: "CLEAR_DATA" });
  };

  const getErrorMessage = (error) => {
    switch (error) {
      case "No user found":
        return {
          title: "No User Found",
          description:
            "No GitHub user match your search query. Try a different search term.",
        };
     
      case "API rate limit exceeded":
        return {
          title: "Rate Limited",
          description:
            "GitHub API rate limit exceeded. Please try again later.",
        };
      case "Failed to search users":
        return {
          title: "Search Failed",
          description:
            "Unable to search GitHub user. Please check your connection and try again.",
        };
      default:
        return {
          title: "Something went wrong",
          description:
            error || "An unexpected error occurred. Please try again.",
        };
    }
  };

  const { title, description } = getErrorMessage(error);

  return (
    <section className="mb-8 max-w-2xl mx-auto p-4">
      <div className="border border-red-500 rounded-md bg-red-50 p-6 shadow">
        <div className="text-center">
          <FiAlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-red-800 mb-2">{title}</h3>
          <p className="text-sm text-red-700 mb-4">{description}</p>
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
