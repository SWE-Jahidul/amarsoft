import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCources] = useState([]);
  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setCources(data));
  }, []);

  return (
    <div className='container'>
      <div className="row mt-3 mb-3">
        {courses.slice(0, 4).map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;

