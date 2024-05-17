import React from 'react'
import PostTopic from '../../components/PostReview'
import ReviewCard from '@/components/ReviewCard'



type Props = {}

export default function Review({}: Props) {
  return (
    <div>
      <div className='max-w-3xl mx-auto p-4'>
        <PostTopic/>
        <ReviewCard/>
      </div>
    </div>
  )
}