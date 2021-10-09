import React from "react";
import { useHistory } from "react-router";
import useServices from "../hooks/useServices";

import Course from "../Course/Course";
const HomeCourse = () => {
  const [courses] = useServices();
  let history = useHistory();
  function handelClick() {
    history.push("./courses");
  }
  return (
    <div>
      <div className="container">
        <div className="row mt-3 mb-3">
          {courses.slice(0, 4).map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCourse;
