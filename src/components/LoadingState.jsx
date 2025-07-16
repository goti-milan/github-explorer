import { BiSearch } from "react-icons/bi";

export default function LoadingState() {
  return (
    <section className="mb-8 max-w-3xl mx-auto p-4 bg-white rounded shadow">
      <div className="flex items-center space-x-4 animate-pulse">
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      </div>
    </section>
  );
}
