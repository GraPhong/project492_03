"use client"
import React from 'react'
import TopicList from '../../components/TopicList'
import PostTopic from '../../components/PostReview'


type Props = {}

export default function Review({}: Props) {
  return (
    <div>
      <div className='max-w-3xl mx-auto p-4'>
        <PostTopic/>
        <TopicList/>
      </div>
    </div>
  )
}