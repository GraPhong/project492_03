import React from "react";
import StarRating from './StarRating';  
import LikeButton from "./LikeButton[id]";

const ReviewCard = ({ reviews}) => {

  return (
    <div>
      {reviews.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.courseNo} {t.courseName}</h2>
            <StarRating score={t.score} /> 
            <div>{t.review}</div>
          </div>

          <div className="flex gap-2 items-center">
            <LikeButton like={t.like}/>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ReviewCard;