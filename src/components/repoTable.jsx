import React, { useState, useMemo } from "react";

export default function RepoTable({ repos }) {
  const [sortBy, setSortBy] = useState("stars");
  const [filterText, setFilterText] = useState("");

  const filteredAndSortedRepos = useMemo(() => {
    let filtered = repos;

    if (filterText.trim()) {
      filtered = repos.filter((repo) =>
        repo.name.toLowerCase().includes(filterText.toLowerCase())
      );
    }

    return [...filtered].sort((a, b) => {
      if (sortBy === "stars") return b.stargazers_count - a.stargazers_count;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });
  }, [repos, sortBy, filterText]);

  return (
    <div className=" mx-auto p-2 bg-white rounded shadow">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
        <input
          type="text"
          placeholder="Filter by repo name..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-full sm:w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full sm:w-48 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="stars">Sort by Stars</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>

      <div className="overflow-auto max-w-full md:max-w-xl max-h-[36rem]">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2 border-b">Repo Name</th>
              <th className="px-4 py-2 border-b">Description</th>
              <th className="px-4 py-2 border-b">Stars</th>
              <th className="px-4 py-2 border-b">Link</th>
            </tr>
          </thead>
          <tbody className="">
            {filteredAndSortedRepos.length > 0 ? (
              filteredAndSortedRepos.map((repo) => (
                <tr key={repo.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b font-medium">
                    {repo.name}
                  </td>
                  <td className="px-4 py-2 border-b text-sm text-gray-600">
                    {repo.description || "No description"}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    {repo.stargazers_count}
                  </td>
                  <td className="px-4 py-2 border-b text-blue-600 hover:underline text-sm">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-4 text-center text-gray-500">
                  No repositories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
