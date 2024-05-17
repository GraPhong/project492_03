"use client";

import { useEffect, useState } from "react";
import Table from "./Table2";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/courses?q=${query}`);
        const jsonData = await res.json();
        setData(jsonData.data || []); // Ensure data is an array
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // Set data to empty array on error
      }
    };

    if (query.length === 0 || query.length > 2) {
      fetchData();
    }
  }, [query]);

  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <Table data={data} />
    </div>
  );
};

export default Searchbar;
