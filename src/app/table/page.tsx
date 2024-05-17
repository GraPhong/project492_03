"use client"

import CourseList2 from '@/components/CourseList2'
import CourseList from '@/components/CourseList2'
import ScheduleTable from '@/components/ScheduleTable'
import TimeTable from '@/components/TimeTable'

import React from 'react'


type Props = {}

export default function Table({}: Props) {
  return (
    <div className='items-center '>
      <TimeTable/>
    </div>
  )
}