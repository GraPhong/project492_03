"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import PostReview from "../../components/PostReview";
import StarRating from "@/components/StarRating";

export default function AddReview() {
  const [courseNo, setCourseNo] = useState("");
  const [courseName, setCourseName] = useState("");
  const [review, setReview] = useState("");
  const [score, setScore] = useState(0); // Initialize score as a number
  const like = 0;

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!courseNo || !courseName || !review || !score) {
      alert("Data are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/reviews", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ courseNo, courseName, review, score, like }),
      });

      if (res.ok) {
        router.push("/review");
      } else {
        throw new Error("Failed to create a review");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='max-w-3xl mx-auto p-4'>
      <PostReview />
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 py-5">
        <input
          onChange={(e) => setCourseNo(e.target.value)}
          value={courseNo}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="CourseNo"
        />

        <input
          onChange={(e) => setCourseName(e.target.value)}
          value={courseName}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="CourseName"
        />

        <div className="font-bold">อยากบอกอะไรให้คนอื่นได้รู้</div>
        <textarea
          onChange={(e) => setReview(e.target.value)}
          value={review}
          className="border border-slate-500 px-8 py-2 h-40"
          placeholder="Review"
        ></textarea>

        <div className="font-bold">คุณอยากให้คะแนนวิชานี้</div>
        <StarRating setScore={setScore} />

        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit mt-3"
        >
          Add Review
        </button>
      </form>
    </div>
  );
}
