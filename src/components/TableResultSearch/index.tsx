import { useState, useEffect } from "react";
import CourseList from "@/components/CourseList.tsx"

const TableResultSearch = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/courses?q=${query}`);
      const result = await res.json();
      setData(result.courses);
    };
    if (query.length === 0 || query.length > 0) fetchData();
  }, [query]);

  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <CourseList courses={data} />
    </div>
  );
}

export default TableResultSearch;
