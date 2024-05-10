import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import React from "react";

const getCourses = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/courses", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch course");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading course: ", error);
  }
};

export default async function CourseList() {
  const { courses } = await getCourses();

  return (
    <>
      {courses.map((t: { _id: React.Key | null | undefined; courseNo: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; courseName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.courseNo}</h2>
            <div>{t.courseName}</div>
          </div>

        </div>
      ))}
    </>
  );
}