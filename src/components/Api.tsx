"use client"
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {
  return (
    <div className="App">
      {/* Header */}
      <header>
        <h1>Schedule</h1>
      </header>

      {/* Main Content */}
      <main>
        {/* Filter Bar */}
        <div className="filter-bar">
          {/* Add your filter options here */}
          <div className="filter-option">Option 1</div>
          <div className="filter-option">Option 2</div>
          {/* ... */}
        </div>

        {/* Schedule Table */}
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
              <th>Location</th>
              {/* ... Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {/* Sample Schedule Rows */}
            <tr>
              <td>9:00 AM</td>
              <td>Event 1</td>
              <td>Location A</td>
              {/* ... Add more table cells as needed */}
            </tr>
            <tr>
              <td>10:00 AM</td>
              <td>Event 2</td>
              <td>Location B</td>
              {/* ... Add more table cells as needed */}
            </tr>
            {/* ... Add more rows as needed */}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default App;