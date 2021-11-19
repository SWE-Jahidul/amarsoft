import React, { useEffect, useState } from "react";
import useServices from "../hooks/useServices";
import Course from "../Course/Course";
import Booking from "../CourseBooking/Booking/Booking";

const Courses = () => {
  const [courses] = useServices();
  return (
    <div className="container">
      
      <div className="row mt-3 mb-3">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
