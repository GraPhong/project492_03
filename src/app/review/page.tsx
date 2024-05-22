"use client"
import React from 'react'
import PostTopic from '../../components/PostReview'
import TableReview from '@/components/TableReview'

export default function Review() {
  return (
    <div>
      <div className='max-w-6xl mx-auto p-10'>
        <PostTopic/>
        <div className='py-4'>
          <TableReview/>
        </div>
      </div>
    </div>
  )
}