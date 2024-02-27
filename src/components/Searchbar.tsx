"use client"
// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

const Searchbar = ({ onSearch }) => {
  const [subjectId, setSubjectId] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/search/${subjectId}`);
      onSearch(response.data.result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="flex border-2 border-gray-500 rounded">
        <input className="px-4 py-2 w-80"
          type="text"
          placeholder="Enter Subject ID"
          value={subjectId}
          onChange={(e) => setSubjectId(e.target.value)}
        />
        <button className="px-4 text-white bg-gray-600 border-l hover:cursor-pointer" onClick={handleSearch}>Search</button>
    </div>
    </div>
  );
};

export default Searchbar;

