import React from "react";

const getReviews = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/reviews", {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch reviews");
      }
  
      return res.json();
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };
  

export default async function ReviewList() {
  const { reviews } = await getReviews();

  return (
    <>
      {reviews.map((t: {_id}) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl"></h2>
            <div>{t.courseNo} {t.courseName} {t.review} {t.score}</div>
          </div>
        </div>
      ))}
    </>
  );
}