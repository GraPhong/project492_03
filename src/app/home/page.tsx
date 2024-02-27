"use client"
import Api from '@/components/Api'
import Searchbar from '@/components/Searchbar'
import Image from 'next/image'
import React, { useState } from 'react';
import ResultBox from '@/components/ResultBox'



const Card = ({ title, description }) => (
  <div style={{ background: 'pink', color: 'black', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <div style={{ padding: '16px' }}>
      <h3 style={{ marginBottom: '8px' }}>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);
const cardData = [
  { id: 1, title: '013011 | จิตวิทยา | sec 001 | Mon-Thu | 8:00-11:00 | Room:HB200 | ดนัย ', description: '' },
  { id: 1, title: '013011 | จิตวิทยา | sec 002 | Mon-Thu | 8:00-11:00 | Room:HB741 | ปราณี ', description: '' },
  { id: 1, title: '013011 | จิตวิทยา | sec 003 | Tue-Fri | 8:00-11:00 | Room:HB742 | ชาตรี ', description: '' },
  // Add more cards as needed
];
export default function Home() {
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = (result) => {
    setSearchResult(result);
  };
 
  return (
    <main className="">
      <div>
      <h1 className="text-3xl font-bold h-10vh    px-20 py-8  items-center ">ค้นหาวิชา</h1>
      <div className='items-center '>
        <Searchbar onSearch={handleSearch} />
        <div style={{ flex: 1, padding: '20px' }}>
          <h3 className='px-20 py-9'></h3>
          {cardData.map((card) => (<Card key={card.id} title={card.title} description={card.description} />))}
        </div>
        <ResultBox result={searchResult} />
      </div>
    </div>
    </main>
  )
}
