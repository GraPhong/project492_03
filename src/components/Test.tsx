import { useState, useEffect } from "react";
import CourseList from "@/components/CourseList.tsx"
import CheckBox from "./CheckBox";

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
    <div style={{ display: 'flex',height: '100vh' }}>
        <div className="app">
          <input
            className="search form-input block w-full px-4 py-2 border border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </div>
      {/* Left side - Sidebar */}
      <div style={{ flex: '0 0 900px', padding: '20px' }}>
          <CourseList courses={data} />
      </div>

      {/* Right side - Display Website */}
      <div style={{ flex: 1, padding: '20px' }}>
        <div className="p-4 border border-slate-300 my-3 ">
          <CheckBox/>
        </div> 
      </div>
    </div>

  );
}

export default TableResultSearch;
