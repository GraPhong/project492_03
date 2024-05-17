import { useEffect, useState } from "react";
import CourseList from "../CourseList.tsx";
import Searchbar from "../Searchbar";

const TableResultSearch = () => {
  const [obj, setObj] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getCourse = async () => {
      try {
        const url = `http://localhost:3000/api/courses?search=${search}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setObj(data);
      } catch (error) {
        console.log("Error loading courses: ", error);
      }
    };
    getCourse();
  }, [search]);

  return (
    <div>
      <div>
        <Searchbar setSearch={setSearch} />
      </div>
      <div>
        <CourseList courses={obj.courses ? obj.courses : []} />
      </div>
    </div>
  );
};

export default TableResultSearch;
