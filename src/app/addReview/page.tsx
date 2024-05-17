"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import PostReview from "../../components/PostReview";

export default function AddReview() {
  const [courseNo, setCourseNo] = useState("");
  const [courseName, setCourseName] = useState("");
  const [review, setReview] = useState("");
  const [score, setScore] = useState("");
  const [like, setLike] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!courseNo || !courseName || !review || !score || !like) {
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
      <PostReview/>
      <form  onSubmit={handleSubmit} className="flex flex-col gap-3 py-5">
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

        <input
          onChange={(e) => setReview(e.target.value)}
          value={review}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="review"
        />

        <input
          onChange={(e) => setScore(e.target.value)}
          value={score}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="score"
        />

        <input
          onChange={(e) => setLike(e.target.value)}
          value={like}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="like"
        />


        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Add Review
        </button>
      </form>
    </div>
  );
}