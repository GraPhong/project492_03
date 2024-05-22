import React from "react";

const CourseList = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course._id} className=" p-4 border border-slate-300 my-3">
          <div className="flex justify-between">
            <div className="font-bold text-2xl">
              {course.courseNo} {course.courseName}
            </div>
            <button className='btn bg-green-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-100 md:static'>Add</button>
          </div>

          <ul>
            {course.sections.map((section, index) => (
              <li key={index}>
                <div>Section: {section.section} Day: {section.day} Time: {section.time} Room: {section.room}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseList;