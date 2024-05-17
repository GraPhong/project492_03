'use client'
import React, { useState } from 'react';
import Searchbar from './Searchbar3';

const Card = ({ title, description }) => (
  <div style={{ background: 'pink', color: 'black', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <div style={{ padding: '16px' }}>
      <h3 style={{ marginBottom: '8px' }}>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);



const ReGe = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'จันทร์', isChecked: false },
    { id: 2, label: 'อังคาร', isChecked: false },
    { id: 3, label: 'พุธ', isChecked: false },
    { id: 4, label: 'พฤหัสบดี', isChecked: false },
    { id: 5, label: 'ศุกร์', isChecked: false },
    { id: 6, label: 'เสาร์', isChecked: false },
    { id: 7, label: 'อาทิตย์', isChecked: false },
    // Add more items as needed
  ]);

  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, isChecked: !checkbox.isChecked } : checkbox
      )
    );
  };

  const cardData = [
    { id: 1, title: '013011 | จิตวิทยา', description: 'อ.ใจดี มีคะแนนเก็บเยอะ ได้ B+' },
    { id: 2, title: '506644 | สัตว์น้ำ', description: 'งานเยอะมากกกกกก ปลายภาคยากสุดๆๆ ได้ c' },
    { id: 3, title: '201100 | คณิต', description: 'ไม่ยากเท่าไหร่ ความรู้มใปลาย ได้ A' },
    // Add more cards as needed
  ];

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
  };

  return (
    <div style={{ display: 'flex',height: '100vh' }}>
      {/* Left side - Checklist */}
      <div style={{ flex: '0 0 200px', background: '#f0f0f0', padding: '20px' }}>
        
        <h2 className='text-3xl font-bold    px-15 py-8    '>
          <button className=''>เพิ่มรีวิว</button>
        </h2>
        <ul>
        <h3 className='text-xl font-bold'>เรียนวัน</h3>
        {checkboxes.map((checkbox) => (
          <li key={checkbox.id}>
            <label className=''>
              <input
                type="checkbox"
                checked={checkbox.isChecked}
                onChange={() => handleCheckboxChange(checkbox.id)}
              />
              {checkbox.label}
              {checkbox.isChecked && <span style={{ marginLeft: '8px' }}>✓</span>}
            </label>
          </li>
        ))}
      </ul>
      </div>

      {/* Right side - Card Component */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h2 className='px-15 py-8'><Searchbar/></h2>
        <h3 className='px-15 py-8'></h3>
        {cardData.map((card) => (
          <Card key={card.id} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default ReGe;
