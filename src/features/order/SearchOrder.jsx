import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`order/${query}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        className="w-32 rounded-full bg-yellow-50 px-3 py-2 text-sm transition-all 
        duration-300 placeholder:text-stone-400 focus:outline-none focus:ring 
        focus:ring-yellow-200 focus:ring-offset-2 sm:w-64 sm:focus:w-72"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
