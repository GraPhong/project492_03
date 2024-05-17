"use client"

import Searchbar from '@/components/Searchbar';
import TableResultSearch from '@/components/TableResultSearch';
import Image from 'next/image'
import React, { useState } from 'react';



export default function Home() {

  return (
    <div> 
      <h1 className="text-3xl font-bold h-10vh    px-20 py-8  items-center ">ค้นหาวิชา</h1>      
      <div className='max-w-6xl mx-auto p-10 '> 
        <TableResultSearch />
      </div>
    </div>
  )
}
