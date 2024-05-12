import React, { useState } from 'react';

const Table = ({ rows, columns }) => {
  const [tableSize, setTableSize] = useState(50); // Initial size of each cell, can be adjusted

  const increaseSize = () => {
    setTableSize(prevSize => prevSize + 5); // Increase cell size
  };

  const decreaseSize = () => {
    if (tableSize > 5) {
      setTableSize(prevSize => prevSize - 5); // Decrease cell size, but ensure it doesn't go below 5
    }
  };

  return (
    <div>
      <button onClick={increaseSize}>Increase Size</button>
      <button onClick={decreaseSize}>Decrease Size</button>
      <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
        <tbody>
          {Array.from({ length: rows }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columns }, (_, colIndex) => (
                <td key={colIndex} style={{ border: '1px solid black', width: tableSize, height: tableSize }}>
                  {/* Content */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
