import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    courseNo: String,
    courseName: String,
    review: String,
    score: String
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;