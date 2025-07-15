import { BiSearch } from "react-icons/bi";

export default function LoadingState() {
  return (
    <section className="mb-8 max-w-3xl mx-auto p-4 bg-white rounded shadow">
      <div className="pt-6">
        <div className="flex items-center gap-2 mb-6">
          <BiSearch className="h-5 w-5 animate-pulse text-gray-500" />
          <h2 className="text-lg font-semibold text-gray-900">
            Searching GitHub Users...
          </h2>
        </div>

        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg animate-pulse"
            >
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="h-5 w-48 bg-gray-200 rounded" />
                <div className="flex gap-4">
                  <div className="h-3 w-16 bg-gray-200 rounded" />
                  <div className="h-3 w-20 bg-gray-200 rounded" />
                  <div className="h-3 w-24 bg-gray-200 rounded" />
                </div>
              </div>
              <div className="h-8 w-20 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
