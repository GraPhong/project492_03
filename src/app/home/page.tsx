"use client"

import Image from 'next/image'
import React, { useState } from 'react';
import CourseList from '@/components/CourseList';
import Searchbar2 from '@/components/Searchbar2';
import Navbar from '@/components/Navbar';


export default function Home() {

  return (
    <div> 

      <h1 className="text-3xl font-bold h-10vh    px-20 py-8  items-center ">ค้นหาวิชา</h1>
        <div><Searchbar2 /></div>
      <div className='max-w-3xl mx-auto p-4 '> 
        <CourseList/>
      </div>
    </div>
  )
}
