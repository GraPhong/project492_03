import React from "react";

export default function Table({ data }) {
  if (!data || !Array.isArray(data)) {
    return <div>No data available</div>;
  }
  
  return (
    <>
      {data.map((t) => (
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
