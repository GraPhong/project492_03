import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";

const TableReview = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/reviews?q=${query}`);
      const result = await res.json();
      setData(result.reviews);
    };
    if (query.length === 0 || query.length > 0) fetchData();
  }, [query]);

  return (
    <div className="app">
      <input
        className="search form-input block w-full px-4 py-2 border border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <ReviewCard reviews={data} />
    </div>
  );
}

export default TableReview;
