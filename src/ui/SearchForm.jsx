/* eslint-disable react/prop-types */
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
function SearchForm({ query, setQuery, placeholder }) {
  return (
    <div className="relative">
      <input
        type="text"
        className="rounded-md border pl-4 pr-10 py-2 shadow-sm md:w-full"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="absolute right-2 top-1/2 -translate-y-1/2">
        <HiOutlineMagnifyingGlass size={24} />
      </button>
    </div>
  );
}

export default SearchForm;
