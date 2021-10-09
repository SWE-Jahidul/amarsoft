import React, { useEffect, useState } from "react";
import useServices from "../hooks/useServices";
import Course from "../Course/Course";


 const Courses = () => {
//   const [courses, setCources] = useState([]);
//   useEffect(() => {
//     fetch("./course.json")
//       .then((res) => res.json())
//       .then((data) => setCources(data));
//   }, []);
 const [courses] = useServices();
  return (
    <div className='container'>
      <div className="row mt-3 mb-3">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
        }

export default Courses;

