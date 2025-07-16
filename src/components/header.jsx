import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className=" px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaGithub className="text-2xl text-foreground" />
            <h1 className="text-xl font-bold text-foreground">
              GitHub Explorer
            </h1>
          </div>
          <div className="flex items-center flex-nowrap space-x-2 text-sm text-muted-foreground ">
            <BiSearch className="h-4 w-4" />
            <span className="hidden sm:block">
              Search GitHub user and repositories
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
