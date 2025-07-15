import React from "react";
import SearchSection from "../components/searchSection";
import { BiSearch } from "react-icons/bi";
import { useGitHub } from "../context/github";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import UserDeatils from "../components/userDetails";

const Home = () => {
  const { state } = useGitHub();

  return (
    <div>
      <SearchSection />
      {state.isLoading && <LoadingState />}

      {state.error && <ErrorState error={state.error} />}

      {state.user && !state.isLoading && !state.error && (
        <UserDeatils user={state.user} />
      )}

      {!state.hasSearched && !state.isLoading && !state.error && (
        <div className="text-center py-16">
          <BiSearch className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Welcome to GitHub Explorer
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Search for GitHub user by username. Explore their profile and public repositories in an
            organized view.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
