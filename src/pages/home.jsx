import SearchSection from "../components/searchSection";
import { BiSearch } from "react-icons/bi";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import UserDetails from "../components/userDetails";
import { useGitHub } from "../context/githubContext";

const Home = () => {
  const { userData, loading, repos, error } = useGitHub();

  const renderSection = () => {
    if (loading) {
      return <LoadingState />;
    }

    if (error) {
      return <ErrorState error={error} />;
    }

    if (userData) {
      return <UserDetails user={userData} repos={repos} />;
    }

    return (
      <div className="text-center py-8">
        <BiSearch className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Welcome to GitHub Explorer
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Search for GitHub user by username. Explore their profile and public
          repositories in an organized view.
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full  ">
      <SearchSection />
      {renderSection()}
    </div>
  );
};

export default Home;
