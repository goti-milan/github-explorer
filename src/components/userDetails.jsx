import RepoTable from "./repoTable";

export default function UserDetails({ user, repos }) {

  return (
    <section className="mb-8 max-w-2xl mx-auto p-4 bg-white rounded shadow">
      <div className="mb-6 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">
              {user?.name || user?.login}
            </h3>
            {user?.name && user?.name !== user.login && (
              <p className="text-sm text-gray-500 font-mono">@{user.login}</p>
            )}
            {user.bio && (
              <p className="mt-2 text-gray-700 text-sm">{user.bio}</p>
            )}

            <div className="mt-3 flex flex-wrap gap-6 text-sm text-gray-600">
              <div>
                <span className="font-semibold">Repos:</span>{" "}
                {user.public_repos}
              </div>
              <div>
                <span className="font-semibold">Followers:</span>{" "}
                {user.followers}
              </div>
              <div>
                <span className="font-semibold">Location:</span>{" "}
                {user.location || "N/A"}
              </div>
            </div>

            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 hover:underline text-sm font-medium"
            >
              🔗 View GitHub Profile
            </a>
          </div>
          <div className="flex-shrink-0">
            <img
              src={user.avatar_url}
              alt={`${user.login} avatar`}
              className="w-30 h-30 rounded-full border"
            />
          </div>
        </div>
      </div>
      <div>
        <RepoTable repos={repos} />
      </div>
    </section>
  );
}
