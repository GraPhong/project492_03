"use client"

import Image from 'next/image'
import React, { useState } from 'react';
import CourseList from '@/components/CourseList';
import Searchbar2 from '@/components/Searchbar2';


export default function Home() {

  return (
    <main className="">
      <div>
      <h1 className="text-3xl font-bold h-10vh    px-20 py-8  items-center ">ค้นหาวิชา</h1>
      <div className='items-center '>
        <Searchbar2 />
        <CourseList/>
      </div>
    </div>
    </main>
  )
}
