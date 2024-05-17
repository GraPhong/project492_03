import React from "react";

const CourseList = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">{course.courseNo} {course.courseName}</h2>
        </div>
      </div>
      ))}
    </div>
  );
}

export default CourseList;
