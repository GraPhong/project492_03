import React, { useState } from 'react';
import CourseList from './CourseList2'; // Import your CourseList component

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/courses?search=${searchQuery}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data); // Update search results
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form className="w-full flex items-center max-w-lg mx-auto" onSubmit={handleSearch}>
      <label className="sr-only">Search</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="รหัสวิชา/ชื่อวิชา"
          required
        />
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3"></button>
      </div>
      <button
        type="submit"
        className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search
      </button>
      {/* Pass searchResults to CourseList component */}
    </form>
    
  );
}

export default SearchBar;